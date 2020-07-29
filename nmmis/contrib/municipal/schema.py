import graphene
# from graphene_django import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
import graphql_geojson
from nmmis.contrib.municipal.models import Municipal, Ward, Road, Telecom, Transformer
from nmmis.contrib.municipal.forms import TelecomForm
from django.contrib.gis.geos import GEOSGeometry
from django.shortcuts import get_object_or_404


class MunicipalType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Municipal
        geojson_field = 'geom'

class WardType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Ward
        geojson_field = 'geom'

class RoadType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Road
        geojson_field = 'geom'

class TelecomType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Telecom
        geojson_field = 'geom'

    def resolve_image(self, *_):
        if self.image:
            return '{}{}'.format(settings.MEDIA_URL, self.image)
        else:
            return ""

class TransformerType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Transformer
        geojson_field = 'geom'
        
    def resolve_image(self, *_):
        if self.image:
            return '{}{}'.format(settings.MEDIA_URL, self.image)
        else:
            return ""




class Query(graphene.ObjectType):
    allmunicipals = graphene.List(MunicipalType)
    municipals = graphene.List(MunicipalType, did=graphene.String())
    municipal = graphene.Field(MunicipalType, mid=graphene.String())

    wards = graphene.List(WardType, mid=graphene.String())
    ward = graphene.Field(WardType, wid=graphene.String())

    roads = graphene.List(RoadType, mid=graphene.String())
    wroads = graphene.List(RoadType, wid=graphene.String())
    # road = graphene.Field(RoadType, wid=graphene.String())

    telecoms = graphene.List(TelecomType, mid=graphene.String())
    wtelecoms = graphene.List(TelecomType, wid=graphene.String())

    transformers = graphene.List(TransformerType, mid=graphene.String())
    wtransformers = graphene.List(TransformerType, wid=graphene.String())

    def resolve_allmunicipals(self, info, *args, **kwargs):
        return Municipal.objects.filter(district__province__country__name="Nepal")

    def resolve_municipals(self, info, did, *args, **kwargs):
        return Municipal.objects.filter(district__id=did)
    
    def resolve_municipal(self, info, mid, *args, **kwargs):
        print("Municipal callled")
        return Municipal.objects.get(id=mid)

    def resolve_wards(self, info, mid, *args, **kwargs):
        print("Ward called");
        return Ward.objects.filter(municipal__id=mid)
    
    def resolve_ward(self, info, wid, *args, **kwargs):
        return Ward.objects.get(id=wid)
    
    def resolve_roads(self, info, mid, *args, **kwargs):
        print("Road called")
        return Road.objects.filter(ward__municipal__id=mid)
    
    def resolve_wroads(self, info, wid, *args, **kwargs):
        return Road.objects.filter(ward__id=wid)

    def resolve_telecoms(self, info, mid, *args, **kwargs):
        print("Telecom called")
        return Telecom.objects.filter(ward__municipal__id=mid)
    
    def resolve_wtelecoms(self, info, wid, *args, **kwargs):
        return Telecom.objects.filter(ward__id=wid)
    
    def resolve_transformers(self, info, mid, *args, **kwargs):
        print("Transformer called")
        return Transformer.objects.filter(ward__municipal__id=mid)
    
    def resolve_wtransformers(self, info, wid, *args, **kwargs):
        return Transformer.objects.filter(ward__id=wid)




class AddTelecom(graphene.Mutation):
    telecom = graphene.Field(TelecomType)

    class Arguments:
        ward = graphene.String()
        type = graphene.String()
        geom = graphql_geojson.Geometry()

    def mutate(self,info, *args, **kwargs):
        print(kwargs['geom'])
        ward = kwargs['ward']
        type = kwargs['type']
        geom = GEOSGeometry(kwargs['geom'], srid=4326).transform(3857, clone=True).ewkt
        telecom = Telecom(ward_id=ward, type=type, geom=geom)
        telecom.save()
        return addTelecom(telecom=telecom)


class ChangeTelecom(graphene.Mutation):
    telecom = graphene.Field(TelecomType)

    class Arguments:
        id = graphene.String()
        ward = graphene.String()
        type = graphene.String()
        geom = graphql_geojson.Geometry()

    def mutate(self,info, id, *args, **kwargs):
        telecom = get_object_or_404(Telecom, pk=id)
        if kwargs['ward']:
            telecom.ward = kwargs['ward']
        telecom.type = kwargs['type']
        telecom.geom = GEOSGeometry(kwargs['geom'], srid=4326).transform(3857, clone=True).ewkt
        telecom.save()
        return changeTelecom(telecom=telecom)



class DeleteTelecom(graphene.Mutation):
    t_id = graphene.String()

    class Arguments:
        id = graphene.String()

    def mutate(self, info, id, *args, **kwargs):
        telecom  = get_object_or_404(Telecom, pk=id)
        telecom.delete()
        return DeleteTelecom(t_id=id)
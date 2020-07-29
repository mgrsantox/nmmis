import graphene
# from graphene_django import DjangoObjectType
import graphql_geojson
from graphene_django.forms.mutation import DjangoModelFormMutation
from nmmis.contrib.building.models import Building
from django.conf import settings
from nmmis.contrib.building.forms import BuildingForm

class BuildingType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Building
        geojson_field = 'geom'
    def resolve_image(self, *_):
        if self.image:
            return '{}{}'.format(settings.MEDIA_URL, self.image)
        else:
            return ""



class Query(graphene.ObjectType):
    buildings = graphene.List(BuildingType, mid=graphene.String())
    wbuildings = graphene.List(BuildingType, wid=graphene.String())
    building = graphene.Field(BuildingType, buid=graphene.String())

    def resolve_buildings(self, info, mid, *args, **kwargs):
        print("Buildings Called")
        return Building.objects.filter(ward__municipal__id=mid)
    
    def resolve_wbuildings(self, info, wid, *args, **kwargs):
        print("Ward Buildings Called")
        return Building.objects.filter(ward__id=wid)
    
    def resolve_building(self, info, buid, *args, **kwargs):
        return Building.objects.get(id=buid)




class addBuilding(DjangoModelFormMutation):
    building = graphene.Field(BuildingType)

    class Meta:
        form_class = BuildingForm
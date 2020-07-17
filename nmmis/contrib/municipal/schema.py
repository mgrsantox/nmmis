import graphene
# from graphene_django import DjangoObjectType
import graphql_geojson
from nmmis.contrib.municipal.models import Municipal


class MunicipalType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Municipal
        geojson_field = 'geom'


class Query(graphene.ObjectType):
    allmunicipals = graphene.List(MunicipalType)
    municipals = graphene.List(MunicipalType, did=graphene.String())
    municipal = graphene.Field(MunicipalType, mid=graphene.String())

    def resolve_allmunicipals(self, info, *args, **kwargs):
        return Municipal.objects.filter(district__province__country__name="Nepal")

    def resolve_municipals(self, info, did, *args, **kwargs):
        return Municipal.objects.filter(district__id=did)
    
    def resolve_municipal(self, info, mid, *args, **kwargs):
        return Municipal.objects.get(id=mid)
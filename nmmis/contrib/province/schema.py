import graphene
# from graphene_django import DjangoObjectType
import graphql_geojson
from nmmis.contrib.province.models import Province


class ProvinceType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Province
        geojson_field = 'geom'


class Query(graphene.ObjectType):
    provinces = graphene.List(ProvinceType)
    province = graphene.Field(ProvinceType, pid=graphene.String())

    def resolve_provinces(self, info, *args, **kwargs):
        return Province.objects.filter(country__name="Nepal")
    
    def resolve_province(self, info, pid, *args, **kwargs):
        return Province.objects.get(id=pid)

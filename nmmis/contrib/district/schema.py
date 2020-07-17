import graphene
# from graphene_django import DjangoObjectType
import graphql_geojson
from nmmis.contrib.district.models import District


class DistrictType(graphql_geojson.GeoJSONType):
    class Meta:
        model = District
        geojson_field = 'geom'


class Query(graphene.ObjectType):
    alldistricts = graphene.List(DistrictType)
    districts = graphene.List(DistrictType, pid=graphene.String())
    district = graphene.Field(DistrictType, did=graphene.String())

    def resolve_alldistricts(self, info, *args, **kwargs):
        return District.objects.filter(province__country__name="Nepal")

    def resolve_districts(self, info, pid, *args, **kwargs):
        return District.objects.filter(province__id=pid)
    
    def resolve_district(self, info, did, *args, **kwargs):
        return District.objects.get(id=did)
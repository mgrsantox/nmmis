import graphene
# from graphene_django import DjangoObjectType
import graphql_geojson
from nmmis.contrib.country.models import Country


class CountryType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Country
        geojson_field = 'geom'


class Query(graphene.ObjectType):
    country = graphene.Field(CountryType)

    def resolve_country(self, info, *args, **kwargs):
        return Country.objects.get(name="Nepal")

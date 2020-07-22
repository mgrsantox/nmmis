import graphene
# from graphene_django import DjangoObjectType
import graphql_geojson
from nmmis.contrib.place.models import Place


class PlaceType(graphql_geojson.GeoJSONType):
    class Meta:
        model = Place
        geojson_field = 'geom'


class Query(graphene.ObjectType):
    places = graphene.List(PlaceType, mid=graphene.String())
    place = graphene.Field(PlaceType, plid=graphene.String())

    def resolve_places(self, info, mid, *args, **kwargs):
        return Place.objects.filter(ward__municipal__id=mid)
    
    def resolve_place(self, info, plid, *args, **kwargs):
        return Place.objects.get(id=plid)
import graphql_geojson
from nmmis.contrib.municipal.models import (Municipal, Ward,
                                            Road, Telecom, Transformer)
from django.conf import settings


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

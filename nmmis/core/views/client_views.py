from django.views.generic import TemplateView
from nmmis.contrib.country.models import Country
from django.contrib.gis.geos import Polygon, GEOSGeometry
import geopandas as gpd
from django.contrib.gis.gdal import DataSource
from nmmis.contrib.province.models import Province
from nmmis.contrib.municipal.models import Municipal, Ward, Road, Telecom, Transformer
from nmmis.contrib.building.models import Building

from django.contrib.gis.gdal import OGRGeometry

# ['OBJECTID', 'Id', 'RDHIER', 'RDLEN', 'RD_NAME', 'RD_SURFACE', 'ROW', 'Shape_Leng', 'RD_WIDTH']

class Index(TemplateView):
    # Data Load from Splited Boundary
    # d = Building.objects.get(id="5jOSNo4jDrAB")
    df = DataSource(
        '/home/mgrsantox/Desktop/projects/nmmis/nmmis/core/views/data/Transformers.shp')
    layer = df[0]
    # Telecom
    # for i in layer:
    #     ward = 'MOjt3Pzr73'
    #     type = i.get('TYPE')
    #     geom = GEOSGeometry(str(i.geom), srid=4326).transform(3857, clone=True)
    #     telecom = Transformer(ward_id=ward, type=type, geom=geom)
        # telecom.save()
        # print(geom)
    # for i in layer:
    #     # print(i.geom)
    #     ward = 'MOjt3Pzr73'
    #     if i.get('RD_NAME'):
    #         name = i.get('RD_NAME')
    #     else:
    #         name= "NO Name in file"
    #     type = i.get('RDHIER')
    #     surface = i.get('RD_SURFACE')
    #     length = i.get('Shape_Leng')
    #     width = i.get('RD_WIDTH')
    #     geom = GEOSGeometry(str(i.geom), srid=4326).transform(3857, clone=True)
        # try:
        #     road = Road(ward_id=ward, name=name, type=type, surface=surface, length=length, width=width, geom=geom)
        #     # road.save()
        # except Exception as e:
        #     print(e)
        # print(road)
        # road.save()
        # break
        # print(i.geom)
    # print(layer[0].geom)
    # for i in layer.get_geoms():
        # print(layer.fields)
        # for f in layer.fields:
        #     print(f)
        # print(str(i))
    #     n = GEOSGeometry(str(i), srid=4326).transform(3857, clone=True).ewkt
    #     d.geom = n
    #     d.save()

    # df = DataSource(
    #     '/home/mgrsantox/Desktop/projects/nmmis/nmmis/core/views/data/Tikapur_Municipal_Boundary.shp')
    # layer = df[0]
    # for i in layer.get_geoms():
    #     n = GEOSGeometry(str(i), srid=4326).transform(3857, clone=True).ewkt
    #     d.geom = n
    #     d.save()
    # print(layer)
    # new_layer = layer[2].geom.clone()
    # new_layer.coord_dim = 2
    # n = GEOSGeometry(str(new_layer), srid=4326).transform(3857, clone=True).ewkt
    # d.geom = n
    # d.save()

    # Load Ward
#     d = Ward.objects.get(id="tShHrBpStM")
#     df = DataSource(
#         '/home/mgrsantox/Desktop/projects/nmmis/nmmis/core/views/data/Tikapur_Ward_Boundary.shp')
#     # print(df.layer_count)
#     # for layer in df:
#     #     print(type(layer))
#     layer = df[0]
#     for i in layer.get_geoms():
#         n = GEOSGeometry(str(i), srid=4326).transform(3857, clone=True).ewkt
#         d.geom = n
#         d.save()

    template_name = 'client/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context['data'] = self.d
        return context


"""
def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        context['book_list'] = Book.objects.all()
        return context
Note
"""

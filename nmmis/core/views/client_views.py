from django.views.generic import TemplateView
from nmmis.contrib.country.models import Country
from django.contrib.gis.geos import Polygon, GEOSGeometry
import geopandas as gpd
from django.contrib.gis.gdal import DataSource
from nmmis.contrib.province.models import Province
from nmmis.contrib.municipal.models import Municipal, Ward

from django.contrib.gis.gdal import OGRGeometry


class Index(TemplateView):
    # Data Load from Splited Boundary
    # d = Ward.objects.get(id="NJPJ2ngWa3")
    df = DataSource(
        '/home/mgrsantox/Desktop/projects/nmmis/nmmis/core/views/data/building_pts.shp')
    layer = df[0]
    # for i in layer.get_geoms():
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
    new_layer = layer[0].geom.clone()
    new_layer.coord_dim = 2
    n = GEOSGeometry(str(new_layer), srid=4326).transform(3857, clone=True).ewkt
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

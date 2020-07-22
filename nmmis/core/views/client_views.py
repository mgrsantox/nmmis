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
    # df = DataSource(
    #     '/home/mgrsantox/Desktop/projects/nmmis/nmmis/core/views/data/ward/5.shp')
    # layer = df[0]
    # for i in layer.get_geoms():
    #     n = GEOSGeometry(str(i), srid=4326).transform(3857, clone=True).ewkt
    #     d.geom = n
    #     d.save()

    # d = Ward.objects.get(id="tShHrBpStM")
    # n = GEOSGeometry('{"type":"Polygon","coordinates":[[[81.024169921875,28.45178873232809],[81.01730346679688,28.427637523347407],[81.03378295898438,28.414352008722247],[81.06399536132812,28.431260556158897],[81.09146118164062,28.456618312416825],[81.10931396484374,28.4795558045049],[81.068115234375,28.504901974894562],[81.03790283203125,28.498867724459092],[81.024169921875,28.45178873232809]]]}', srid=4326)
    # n= n.transform(3857, clone=True).ewkt
    # d.geom = n
    # d.save()

    # df = DataSource(
    #     '/home/mgrsantox/Desktop/projects/nmmis/nmmis/core/views/data/Tikapur_Municipal_Boundary.shp')
    # layer = df[0]
    # for i in layer.get_geoms():
    #     n = GEOSGeometry(str(i), srid=4326).transform(3857, clone=True).ewkt
    #     d.geom = n
    #     d.save()
    # print(layer)
    # new_layer = layer[4].geom.clone()
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

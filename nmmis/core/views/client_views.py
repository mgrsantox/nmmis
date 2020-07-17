from django.views.generic import TemplateView
from nmmis.contrib.country.models import Country
from django.contrib.gis.geos import Polygon, GEOSGeometry
import geopandas as gpd
from django.contrib.gis.gdal import DataSource

# a = Polygon(((0.0, 0.0), (0.0, 50.0), (50.0, 50.0), (50.0, 0.0), (0.0, 0.0)))

# a = GEOSGeometry('POLYGON((81.474609375 27.21555620902969,84.990234375 27.21555620902969,84.990234375 29.611670115197377,81.474609375 29.611670115197377,81.474609375 27.21555620902969))')
# a = GEOSGeometry('POLYGON(( 10 10, 10 20, 20 20, 20 15, 10 10))')
# a = GEOSGeometry('POLYGON ((28.02271961597122 83.1198879971125, 28.02274854875333 83.11982100583475, 28.02278098134609 83.11960497186691, 28.02271961597122 83.1198879971125))')
# a = GEOSGeometry('POLYGON((84.4189453125 27.605670826465445, 85.6494140625 27.605670826465445, 85.6494140625 28.362401735238237, 84.4189453125 28.362401735238237, 84.4189453125 27.605670826465445))')
# print(a)

from django.contrib.gis.gdal import OGRGeometry


class Index(TemplateView):
    """
    d = Country.objects.get(name="Nepal")
    # # print(d.geom)
    df = DataSource(
        '/home/mgrsantox/Desktop/projects/nmmis/nmmis/core/views/Province_Boundary.shp')
    # # print(df['geometry'][0])
    layer = df[0]
    new_layer = layer[0].geom.clone()
    new_layer.coord_dim = 2
    # # print(layer.get_geoms())
    # # print(OGRGeometry(layer))
    n = GEOSGeometry(str(new_layer), srid=4326).transform(3857, clone=True).ewkt
    d.geom = n
    d.save()
    # for i in layer.get_geoms():
        # n = GEOSGeometry(str(i), srid=4326).transform(3857, clone=True).ewkt
        # d.geom = n
    #     # d.geom = GEOSGeometry(str(i), srid=4326)
        # d.save()
    #     print("SAVED !!!!!!!!")
    # # print(df['geometry'][0])
    # # print(df[0].get_geoms())
    # # print(Polygon([pt.tuple for pt in layer.get_geoms()]))
    # # print(layer.extent.tuple)
    # # d.geom = a
    # # d.geom.srid = 4326
    # # print(d.geom.srid)
    # # d.save()
    """
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

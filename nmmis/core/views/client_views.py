from django.views.generic import TemplateView
from nmmis.contrib.country.models import Country
from django.contrib.gis.geos import Polygon, GEOSGeometry

# a = Polygon(((0.0, 0.0), (0.0, 50.0), (50.0, 50.0), (50.0, 0.0), (0.0, 0.0)))

# a = GEOSGeometry('POLYGON((81.474609375 27.21555620902969,84.990234375 27.21555620902969,84.990234375 29.611670115197377,81.474609375 29.611670115197377,81.474609375 27.21555620902969))')
a = GEOSGeometry('POLYGON(( 10 10, 10 20, 20 20, 20 15, 10 10))')
# a = GEOSGeometry('POLYGON ((83.1198879971125 28.02271961597122, 83.11982100583475 28.02274854875333, 83.11960497186691 28.02278098134609,83.1198879971125 28.02271961597122))')
print(a)


class Index(TemplateView):
    d = Country.objects.get(id="VaPSk")
    # print(d.geom)
    d.geom = a
    # d.geom.srid = 4326
    print(d.geom.srid)
    d.save()
    template_name = 'client/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data'] = self.d
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

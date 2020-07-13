from django.views.generic import TemplateView
from nmmis.contrib.country.models import Country


class Index(TemplateView):
    d = Country.objects.get(id="VaPSk")
    # print(d.geom)
    template_name = 'index.html'

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

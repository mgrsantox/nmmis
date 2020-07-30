from django.views.generic import TemplateView


class AdminIndex(TemplateView):
    template_name = 'myadmin/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context['data'] = self.d
        return context

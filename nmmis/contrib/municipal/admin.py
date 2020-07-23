from django.contrib import admin
from nmmis.contrib.municipal.models import Municipal, Ward, Road, Telecom, Transformer

admin.site.register(Municipal)
admin.site.register(Ward)
admin.site.register(Road)
admin.site.register(Telecom)
admin.site.register(Transformer)

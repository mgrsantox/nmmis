from django.contrib import admin
from nmmis.contrib.municipal.models import Municipal, Ward, Road

admin.site.register(Municipal)
admin.site.register(Ward)
admin.site.register(Road)

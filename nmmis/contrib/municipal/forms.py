from django.contrib.gis import forms
from nmmis.contrib.municipal.models import Telecom
from django.contrib.gis.geos import GEOSGeometry


class TelecomForm(forms.ModelForm):
    class Meta:
        model= Telecom
        fields = "__all__"

    # def save(self, commit=True):
    #     print(self.id)
    #     telecom = super(TelecomForm, self).save(commit=False)
    #     geom = GEOSGeometry(self.cleaned_data.get('geom')).transform(3857, clone=True)
    #     telecom.geom = geom
    #     telecom.save()
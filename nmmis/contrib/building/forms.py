from django import forms
from nmmis.contrib.building.models import Building


class BuildingForm(forms.ModelForm):
    class Meta:
        model=Building
        fields = "__all__"

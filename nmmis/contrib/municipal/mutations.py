import shutil
import graphene
import graphql_geojson
from graphene_file_upload.scalars import Upload
from django.contrib.gis.gdal import DataSource
from django.contrib.gis.geos import GEOSGeometry
from django.shortcuts import get_object_or_404
from nmmis.utils.generators import get_uploaded_file, aphnum_random3
from nmmis.contrib.municipal.models import (Municipal, Ward, Telecom)
from nmmis.contrib.municipal.types import (
    MunicipalType, WardType, TelecomType)
from django.conf import settings


class AddMunicipal(graphene.Mutation):
    municipal = graphene.Field(MunicipalType)

    class Arguments:
        # ward = graphene.String()
        name = graphene.String()
        headquarter = graphene.String()
        area = graphene.Int()
        total = graphene.Int()
        male = graphene.Int()
        female = graphene.Int()
        hindu = graphene.Int()
        muslim = graphene.Int()
        buddhist = graphene.Int()
        other = graphene.Int()
        file = Upload()

    def mutate(self, info, *args, **kwargs):
        folder_name = aphnum_random3()
        file_name = ''
        for _file in kwargs['file']:
            get_uploaded_file(_file, folder_name)
            if _file.name.split('.')[-1] == 'shp':
                file_name = _file.name
        folder_location = settings.SHAPE_DATA_ROOT + '/' + folder_name
        file_location = folder_location + '/' + file_name
        try:
            df = DataSource(file_location)
            layer = df[0]
            geom = GEOSGeometry(str(layer[0].geom), srid=4326).transform(
                3857, clone=True).ewkt
            name = kwargs['name']
            headquarter = kwargs['headquarter']
            area = kwargs['area']
            total = kwargs['total']
            male = kwargs['male']
            female = kwargs['female']
            hindu = kwargs['hindu']
            muslim = kwargs['muslim']
            buddhist = kwargs['buddhist']
            other = kwargs['other']
            municipal = Municipal(district_id="v7N9VM8tEQVg", name=name,
                                  headquarter=headquarter, area=area,
                                  total=total, male=male, female=female,
                                  hindu=hindu, muslim=muslim,
                                  buddhist=buddhist, other=other, geom=geom)
            municipal.save()
        except Exception as e:
            raise e
        shutil.rmtree(folder_location, ignore_errors=True)
        return AddMunicipal(municipal=municipal)


class AddWard(graphene.Mutation):
    ward = graphene.Field(WardType)

    class Arguments:
        # municipal = graphene.String()
        name = graphene.String()
        headquarter = graphene.String()
        area = graphene.Int()
        total = graphene.Int()
        male = graphene.Int()
        female = graphene.Int()
        hindu = graphene.Int()
        muslim = graphene.Int()
        buddhist = graphene.Int()
        other = graphene.Int()
        file = Upload()

    def mutate(self, info, *args, **kwargs):
        folder_name = aphnum_random3()
        file_name = ''
        for _file in kwargs['file']:
            get_uploaded_file(_file, folder_name)
            if _file.name.split('.')[-1] == 'shp':
                file_name = _file.name
        folder_location = settings.SHAPE_DATA_ROOT + '/' + folder_name
        file_location = folder_location + '/' + file_name
        try:
            df = DataSource(file_location)
            layer = df[0]
            geom = GEOSGeometry(str(layer[0].geom), srid=4326).transform(
                3857, clone=True).ewkt
            name = kwargs['name']
            headquarter = kwargs['headquarter']
            area = kwargs['area']
            total = kwargs['total']
            male = kwargs['male']
            female = kwargs['female']
            hindu = kwargs['hindu']
            muslim = kwargs['muslim']
            buddhist = kwargs['buddhist']
            other = kwargs['other']
            ward = Ward(municipal_id="iaEL7GVAzOtRL", name=name,
                        headquarter=headquarter, area=area, total=total,
                        male=male, female=female, hindu=hindu, muslim=muslim,
                        buddhist=buddhist, other=other, geom=geom)
            ward.save()
        except Exception as e:
            raise e
        shutil.rmtree(folder_location, ignore_errors=True)
        return AddWard(ward=ward)


class AddTelecom(graphene.Mutation):
    telecom = graphene.Field(TelecomType)

    class Arguments:
        ward = graphene.String()
        type = graphene.String()
        geom = graphql_geojson.Geometry()

    def mutate(self, info, *args, **kwargs):
        print(kwargs['geom'])
        ward = kwargs['ward']
        type = kwargs['type']
        geom = GEOSGeometry(kwargs['geom'], srid=4326).transform(
            3857, clone=True).ewkt
        telecom = Telecom(ward_id=ward, type=type, geom=geom)
        telecom.save()
        return AddTelecom(telecom=telecom)


class ChangeTelecom(graphene.Mutation):
    telecom = graphene.Field(TelecomType)

    class Arguments:
        id = graphene.String()
        ward = graphene.String()
        type = graphene.String()
        geom = graphql_geojson.Geometry()

    def mutate(self, info, id, *args, **kwargs):
        telecom = get_object_or_404(Telecom, pk=id)
        if kwargs['ward']:
            telecom.ward = kwargs['ward']
        telecom.type = kwargs['type']
        telecom.geom = GEOSGeometry(
            kwargs['geom'], srid=4326).transform(3857, clone=True).ewkt
        telecom.save()
        return ChangeTelecom(telecom=telecom)


class DeleteTelecom(graphene.Mutation):
    t_id = graphene.String()

    class Arguments:
        id = graphene.String()

    def mutate(self, info, id, *args, **kwargs):
        telecom = get_object_or_404(Telecom, pk=id)
        telecom.delete()
        return DeleteTelecom(t_id=id)

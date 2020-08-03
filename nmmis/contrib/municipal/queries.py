import graphene
from nmmis.contrib.municipal.models import (Municipal, Ward,
                                            Road, Telecom, Transformer)
from nmmis.contrib.municipal.types import (MunicipalType, WardType, RoadType,
                                           TelecomType, TransformerType)


class Query(graphene.ObjectType):
    allmunicipals = graphene.List(MunicipalType)
    municipals = graphene.List(MunicipalType, did=graphene.String())
    municipal = graphene.Field(MunicipalType, mid=graphene.String())

    wards = graphene.List(WardType, mid=graphene.String())
    ward = graphene.Field(WardType, wid=graphene.String())

    roads = graphene.List(RoadType, mid=graphene.String())
    wroads = graphene.List(RoadType, wid=graphene.String())
    # road = graphene.Field(RoadType, wid=graphene.String())

    telecoms = graphene.List(TelecomType, mid=graphene.String())
    wtelecoms = graphene.List(TelecomType, wid=graphene.String())

    transformers = graphene.List(TransformerType, mid=graphene.String())
    wtransformers = graphene.List(TransformerType, wid=graphene.String())

    def resolve_allmunicipals(self, info, *args, **kwargs):
        return Municipal.objects.filter(district__province__country__name="Nepal")

    def resolve_municipals(self, info, did, *args, **kwargs):
        return Municipal.objects.filter(district__id=did)

    def resolve_municipal(self, info, mid, *args, **kwargs):
        print("Municipal callled")
        return Municipal.objects.get(id=mid)

    def resolve_wards(self, info, mid, *args, **kwargs):
        print("Ward called")
        return Ward.objects.filter(municipal__id=mid)

    def resolve_ward(self, info, wid, *args, **kwargs):
        print("single ward with id {} called".format(wid))
        return Ward.objects.get(id=wid)

    def resolve_roads(self, info, mid, *args, **kwargs):
        print("Road called")
        return Road.objects.filter(ward__municipal__id=mid)

    def resolve_wroads(self, info, wid, *args, **kwargs):
        print("ward Road called")
        return Road.objects.filter(ward__id=wid)

    def resolve_telecoms(self, info, mid, *args, **kwargs):
        print("Telecom called")
        return Telecom.objects.filter(ward__municipal__id=mid)

    def resolve_wtelecoms(self, info, wid, *args, **kwargs):
        return Telecom.objects.filter(ward__id=wid)

    def resolve_transformers(self, info, mid, *args, **kwargs):
        print("Transformer called")
        return Transformer.objects.filter(ward__municipal__id=mid)

    def resolve_wtransformers(self, info, wid, *args, **kwargs):
        return Transformer.objects.filter(ward__id=wid)

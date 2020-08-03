import graphene
from nmmis.contrib.country.schema import Query as CQuery
from nmmis.contrib.province.schema import Query as PQuery
from nmmis.contrib.district.schema import Query as DQuery
from nmmis.contrib.municipal.queries import Query as MQuery
from nmmis.contrib.municipal import mutations as mun_mutation
from nmmis.contrib.place.schema import Query as PLQuery
from nmmis.contrib.building.schema import addBuilding, Query as BQuery


class Query(CQuery, PQuery, DQuery, MQuery, PLQuery, BQuery, graphene.ObjectType):
    pass


class Mutation(graphene.ObjectType):
    add_building = addBuilding.Field()
    add_municipal = mun_mutation.AddMunicipal.Field()
    add_ward = mun_mutation.AddWard.Field()
    add_telecom = mun_mutation.AddTelecom.Field()
    change_telecom = mun_mutation.ChangeTelecom.Field()
    delete_telecom = mun_mutation.DeleteTelecom.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

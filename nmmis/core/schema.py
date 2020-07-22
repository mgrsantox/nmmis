
import graphene
from nmmis.contrib.country.schema import Query as CQuery
from nmmis.contrib.province.schema import Query as PQuery
from nmmis.contrib.district.schema import Query as DQuery
from nmmis.contrib.municipal.schema import Query as MQuery
from nmmis.contrib.place.schema import Query as PLQuery


class Query(CQuery, PQuery, DQuery, MQuery, PLQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)

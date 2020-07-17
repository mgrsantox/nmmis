
import graphene
from nmmis.contrib.country.schema import Query as CQuery
from nmmis.contrib.province.schema import Query as PQuery
from nmmis.contrib.district.schema import Query as DQuery


class Query(CQuery, PQuery, DQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)

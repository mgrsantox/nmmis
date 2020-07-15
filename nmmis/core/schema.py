
import graphene
from nmmis.contrib.country.schema import Query as CQuery


class Query(CQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)

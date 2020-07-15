from django_hosts import patterns, host

host_patterns = patterns(
    '',
    host(r'www', 'nmmis.core.urls.client_urls', name='www'),
    host(r'admin', 'nmmis.core.urls.admin_urls', name='admin'),
    host(r'api', 'nmmis.core.urls.api_urls', name='api'),
)

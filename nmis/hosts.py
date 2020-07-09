from django_hosts import patterns, host

host_patterns = patterns(
    '',
    host(r'www', 'nmis.core.urls.client_urls', name='www'),
    host(r'admin', 'nmis.core.urls.admin_urls', name='admin'),
    host(r'api', 'nmis.core.urls.api_urls', name='api'),
)

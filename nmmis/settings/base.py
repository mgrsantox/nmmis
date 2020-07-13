import environ

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = environ.Path(__file__) - 2
ROOT_DIR = BASE_DIR - 1

env = environ.Env()
# Read Env file
env.read_env(str(ROOT_DIR.path('.env')))


# Django Default Applications
DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.gis',
]


# Third Party Applications
AGENT_APPS = [
    'django_hosts',
    'graphene_django',
]


# Local Application
LOCAL_APPS = [
    'nmmis.contrib.country',
]


# Intalled Apps
INSTALLED_APPS = DJANGO_APPS + AGENT_APPS + LOCAL_APPS


# Middlewate list
MIDDLEWARE = [
    'django_hosts.middleware.HostsRequestMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'nmis.utils.middlewares.ThreadLocalUserMiddleware',
    'django_hosts.middleware.HostsResponseMiddleware',
]


# Root URLS pointer
ROOT_URLCONF = 'nmmis.core.urls.client_urls'

# WSGI Pointer for Runnig Application
WSGI_APPLICATION = 'nmmis.wsgi.application'


# Template settings
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [str(BASE_DIR('templates'))],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Custom User AUth Model Pointer
# AUTH_USER_MODEL = "user.User"


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kathmandu'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = "/static/"
# https://docs.djangoproject.com/en/dev/ref/settings/#static-root
STATIC_ROOT = str(BASE_DIR('staticfiles'))
# https://docs.djangoproject.com/en/dev/ref/contrib/staticfiles/#std:setting-STATICFILES_DIRS
STATICFILES_DIRS = [str(BASE_DIR.path('static'))]


# Media
MEDIA_ROOT = str(BASE_DIR('media'))
# https://docs.djangoproject.com/en/dev/ref/settings/#media-url
MEDIA_URL = '/media/'

# Django Host Configs
ROOT_HOSTCONF = 'nmmis.hosts'
DEFAULT_HOST = 'www'


# Graphene Schema Pointer
GRAPHENE = {
    'SCHEMA': 'nmmis.schema.schema'
}

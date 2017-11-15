"""A process specialization.

For further information goto http://wordpress.es-doc.org/cmip6-model-specializations.

"""
# --------------------------------------------------------------------
# INTERNAL (do not change)
# --------------------------------------------------------------------
from collections import OrderedDict

DETAILS = OrderedDict()
ENUMERATIONS = OrderedDict()

# --------------------------------------------------------------------
# CONTACT: Set to specialization co-ordinator.
# --------------------------------------------------------------------
CONTACT = 'David Hassell'

# --------------------------------------------------------------------
# AUTHORS: Set to specialization authors (comma delimited).
# --------------------------------------------------------------------
AUTHORS = 'David Hassell'

# --------------------------------------------------------------------
# QUALITY CONTROL STATUS: Set to 'draft' or 'complete'
# --------------------------------------------------------------------
QC_STATUS = 'draft'

# --------------------------------------------------------------------
# DESCRIPTION: Short description of the specialization.
# --------------------------------------------------------------------
DESCRIPTION = 'Atmospheric chemistry tropospheric heterogeneous chemistry'

# --------------------------------------------------------------------
# PROCESS: top level
# --------------------------------------------------------------------
DETAILS['toplevel'] = {
    'description': 'Tropospheric heterogenous atmospheric chemistry',
    'properties': [ 
        ('overview', 'str', '1.1',
             'Overview tropospheric heterogenous atmospheric chemistry'),
        ('gas_phase_species', 'str', '0.1',
            'List of gas phase species included in the tropospheric heterogeneous chemistry scheme.'),
        ('aerosol_species', 'ENUM:aerosol_species', '0.N',
            'Aerosol species included in the tropospheric heterogeneous chemistry scheme.'),
        ('number_of_steady_state_species', 'int', '1.1',
             'The number of steady state species in the tropospheric heterogeneous chemistry scheme.'),
    ],
}

# --------------------------------------------------------------------
# SUB-PROCESS: Dry deposition
# --------------------------------------------------------------------
DETAILS['dry_deposition'] = {
    'description': 'Dry deposition describes the dry processes by which species deposit themselves on solid surfaces thus decreasing their concentration in the air.',
    'properties': [
        ('interactive', 'bool', '1.1',
         'Is dry deposition interactive (as opposed to prescribed)?'),
    ],
}

# --------------------------------------------------------------------
# SUB-PROCESS: Coagulation
# --------------------------------------------------------------------
DETAILS['coagulation'] = {
    'description': 'Coagulation is a process by which aerosol particles grow.',
    'properties': [
        ('included', 'bool', '1.1',
            'Is coagulation is included in the tropospheric heterogeneous chemistry scheme or not?'),       
    ],
}

# --------------------------------------------------------------------
# ENUMERATIONS
# --------------------------------------------------------------------
ENUMERATIONS['washout_methods'] = {
    'description': 'Methods of downward transport of soluble chemistry species in clouds.',
    'is_open': False,
    'members': [
        ('In-cloud scavenging', None),
        ('Below-cloud scavenging', None),
    ]
}
    
ENUMERATIONS['aerosol_species'] = {
    'description': 'Aerosol species included in the stratospheric heterogeneous chemistry scheme',
    'is_open': False,
    'members': [
        ('Sulphate', None),
        ('Nitrate', None),
        ('Sea salt', None),
        ('Dust', None),
        ('Ice', None),
        ('Organic', None),
        ('Black carbon/soot', None),
        ('Polar stratospheric ice', None),
        ('Secondary organic aerosols', None),
        ('Particulate organic matter', None),
    ]
}

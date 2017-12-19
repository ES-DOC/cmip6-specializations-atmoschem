(function (APP) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Register with application.
    APP.registerTopic({"id": "cmip6.atmoschem", "label": "Atmoschem", "description": "Atmospheric chemistry realm", "contact": "Charlotte Pascoe, David Hassell", "authors": ["David Hassell"], "contributors": ["CMIP5 version + Bill Collins (URead)"], "project": "cmip6", "changeHistory": [{"note": "Initialised from CMIP5", "date": "2017-08-04", "version": "0.1.0", "author": "Charlotte Pascoe (NCAS), David Hassell (NCAS)"}, {"note": "Updated with input from Bill Collins (URead), John Scinocca (CCCma)", "date": "2017-11-22", "version": "0.2.0", "author": "David Hassell (NCAS)"}], "qcStatus": "draft", "shortTables": [{"id": "atmoschems", "label": "Main", "properties": [{"priority": 1, "id": "cmip6.atmoschem.key_properties.toplevel.model_name"}, {"priority": 1, "id": "cmip6.atmoschem.key_properties.toplevel.family_approach"}, {"priority": 1, "id": "cmip6.atmoschem.transport.use_atmospheric_transport"}, {"priority": 1, "id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.sources"}, {"priority": 1, "id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.sources"}, {"priority": 1, "id": "cmip6.atmoschem.emissions_concentrations.concentrations.prescribed_lower_boundary"}, {"priority": 1, "id": "cmip6.atmoschem.emissions_concentrations.concentrations.prescribed_upper_boundary"}, {"priority": 1, "id": "cmip6.atmoschem.stratospheric_heteroeneous_chemistry.sedimentation"}, {"priority": 1, "id": "cmip6.atmoschem.stratospheric_heteroeneous_chemistry.coagulation"}, {"priority": 1, "id": "cmip6.atmoschem.tropospheric_heteroeneous_chemistry.interactive_dry_depoitionn"}, {"priority": 1, "id": "cmip6.atmoschem.tropospheric_heteroeneous_chemistry.coagulation"}, {"priority": 1, "id": "cmip6.atmoschem.photo_chemistry.photolysis.method"}]}], "subTopics": [{"id": "cmip6.atmoschem.key_properties", "label": "Key Properties", "description": "Key properties of the atmospheric chemistry", "contact": "Charlotte Pascoe, David Hassell", "properties": [{"id": "cmip6.atmoschem.key_properties.overview", "label": "Overview", "description": "Overview of atmospheric chemistry", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.model_name", "label": "Model Name", "description": "Name of chemistry model code", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.chemistry_scheme_scope", "label": "Chemistry Scheme Scope", "description": "Atmospheric domains covered by the atmospheric chemistry model", "cardinality": "1.N", "type": "enum", "enum": {"id": "Atmospheric domains covered by the atmospheric chemistry model", "label": "Chemistry Scheme Scopes", "description": "Atmospheric domains covered by the atmospheric chemistry model", "is_open": true, "choices": [{"description": null, "value": "troposhere"}, {"description": null, "value": "stratosphere"}, {"description": null, "value": "mesosphere"}, {"description": null, "value": "mesosphere"}, {"description": null, "value": "whole atmosphere"}]}}, {"id": "cmip6.atmoschem.key_properties.basic_approximations", "label": "Basic Approximations", "description": "Basic approximations made in the atmospheric chemistry model", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.prognostic_variables_form", "label": "Prognostic Variables Form", "description": "Form of prognostic variables in the atmospheric chemistry component.", "cardinality": "1.N", "type": "enum", "enum": {"id": "Form of prognostic variables in the atmospheric chemistry component.", "label": "Prognostic Vars Types", "description": "Form of prognostic variables in the atmospheric chemistry component.", "is_open": true, "choices": [{"description": null, "value": "3D mass/mixing ratio for gas"}]}}, {"id": "cmip6.atmoschem.key_properties.number_of_tracers", "label": "Number Of Tracers", "description": "Number of advected tracers in the atmospheric chemistry model", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.family_approach", "label": "Family Approach", "description": "Atmospheric chemistry calculations (not advection) generalized into families of species?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.key_properties.coupling_with_chemical_reactivity", "label": "Coupling With Chemical Reactivity", "description": "Atmospheric chemistry transport scheme turbulence is couple with chemical reactivity?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.key_properties.software_properties.repository", "label": "Software Properties > Repository", "description": "Location of code for this component.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.software_properties.code_version", "label": "Software Properties > Code Version", "description": "Code version identifier.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.software_properties.code_languages", "label": "Software Properties > Code Languages", "description": "Code language(s).", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.method", "label": "Timestep Framework > Method", "description": "Mathematical method deployed to solve the evolution of a given variable", "cardinality": "1.1", "type": "enum", "enum": {"id": "Mathematical method deployed to solve the evolution of a given variable", "label": "Timestepping Methods", "description": "Mathematical method deployed to solve the evolution of a given variable", "is_open": true, "choices": [{"description": null, "value": "Operator splitting"}, {"description": null, "value": "Integrated"}]}}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_advection_timestep", "label": "Timestep Framework > Split Operator Advection Timestep", "description": "Timestep for chemical species advection (in seconds)", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_physical_timestep", "label": "Timestep Framework > Split Operator Physical Timestep", "description": "Timestep for physics (in seconds).", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_chemistry_timestep", "label": "Timestep Framework > Split Operator Chemistry Timestep", "description": "Timestep for chemistry (in seconds).", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_alternate_order", "label": "Timestep Framework > Split Operator Alternate Order", "description": "?", "cardinality": "0.1", "type": "bool"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.integrated_timestep", "label": "Timestep Framework > Integrated Timestep", "description": "Timestep for the atmospheric chemistry model (in seconds)", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.integrated_scheme_type", "label": "Timestep Framework > Integrated Scheme Type", "description": "Specify the type of timestep scheme", "cardinality": "1.1", "type": "enum", "enum": {"id": "Specify the type of timestep scheme", "label": "Integrated Scheme Types", "description": "Specify the type of timestep scheme", "is_open": true, "choices": [{"description": null, "value": "Explicit"}, {"description": null, "value": "Implicit"}, {"description": null, "value": "Semi-implicit"}, {"description": null, "value": "Semi-analytic"}, {"description": null, "value": "Impact solver"}, {"description": null, "value": "Back Euler"}, {"description": null, "value": "Newton Raphson"}, {"description": null, "value": "Rosenbrock"}]}}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.turbulence", "label": "Timestep Framework > Split Operator Order > Turbulence", "description": "Call order for turbulence scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.convection", "label": "Timestep Framework > Split Operator Order > Convection", "description": "Call order for convection scheme This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.precipitation", "label": "Timestep Framework > Split Operator Order > Precipitation", "description": "Call order for precipitation scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.emissions", "label": "Timestep Framework > Split Operator Order > Emissions", "description": "Call order for emissions scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.deposition", "label": "Timestep Framework > Split Operator Order > Deposition", "description": "Call order for deposition scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.gas_phase_chemistry", "label": "Timestep Framework > Split Operator Order > Gas Phase Chemistry", "description": "Call order for gas phase chemistry scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.tropospheric_heterogeneous_phase_chemistry", "label": "Timestep Framework > Split Operator Order > Tropospheric Heterogeneous Phase Chemistry", "description": "Call order for tropospheric heterogeneous phase chemistry scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.stratospheric_heterogeneous_phase_chemistry", "label": "Timestep Framework > Split Operator Order > Stratospheric Heterogeneous Phase Chemistry", "description": "Call order for stratospheric heterogeneous phase chemistry scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.photo_chemistry", "label": "Timestep Framework > Split Operator Order > Photo Chemistry", "description": "Call order for photo chemistry scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.timestep_framework.split_operator_order.aerosols", "label": "Timestep Framework > Split Operator Order > Aerosols", "description": "Call order for aerosols scheme. This should be an integer greater than zero, and may be the same value as for another process if they are calculated at the same time.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.description", "label": "Tuning Applied > Description", "description": "General overview description of tuning: explain and motivate the main targets and metrics retained. &Document the relative weight given to climate performance metrics versus process oriented metrics, &and on the possible conflicts with parameterization level tuning. In particular describe any struggle &with a parameter value that required pushing it to its limits to solve a particular model deficiency.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.global_mean_metrics_used", "label": "Tuning Applied > Global Mean Metrics Used", "description": "List set of metrics of the global mean state used in tuning model/component", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.regional_metrics_used", "label": "Tuning Applied > Regional Metrics Used", "description": "List of regional metrics of mean state used in tuning model/component", "cardinality": "0.N", "type": "str"}, {"id": "cmip6.atmoschem.key_properties.tuning_applied.trend_metrics_used", "label": "Tuning Applied > Trend Metrics Used", "description": "List observed trend metrics used in tuning model/component", "cardinality": "0.N", "type": "str"}]}, {"id": "cmip6.atmoschem.grid", "label": "Grid", "description": "Atmospheric chemistry grid", "contact": "David Hassell", "properties": [{"id": "cmip6.atmoschem.grid.overview", "label": "Overview", "description": "Describe the general structure of the atmopsheric chemistry grid", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.grid.matches_atmosphere_grid", "label": "Matches Atmosphere Grid", "description": " Does the atmospheric chemistry grid match the atmosphere grid?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.grid.resolution.name", "label": "Resolution > Name", "description": "This is a string usually used by the modelling group to describe the resolution of this grid, e.g. ORCA025, N512L180, T512L70 etc.", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.grid.resolution.canonical_horizontal_resolution", "label": "Resolution > Canonical Horizontal Resolution", "description": "Expression quoted for gross comparisons of resolution, eg. 50km or 0.1 degrees etc.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.grid.resolution.number_of_horizontal_gridpoints", "label": "Resolution > Number Of Horizontal Gridpoints", "description": "Total number of horizontal (XY) points (or degrees of freedom) on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.grid.resolution.number_of_vertical_levels", "label": "Resolution > Number Of Vertical Levels", "description": "Number of vertical levels resolved on computational grid.", "cardinality": "0.1", "type": "int"}, {"id": "cmip6.atmoschem.grid.resolution.is_adaptive_grid", "label": "Resolution > Is Adaptive Grid", "description": "Default is False. Set true if grid resolution changes during execution.", "cardinality": "0.1", "type": "bool"}]}, {"id": "cmip6.atmoschem.transport", "label": "Transport", "description": "Atmospheric chemistry transport", "contact": "David Hassell", "properties": [{"id": "cmip6.atmoschem.transport.overview", "label": "Overview", "description": "General overview of transport implementation", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.transport.use_atmospheric_transport", "label": "Use Atmospheric Transport", "description": "Is transport handled by the atmosphere, rather than within atmospheric cehmistry?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.transport.transport_details", "label": "Transport Details", "description": "If transport is handled within the atmospheric chemistry scheme, describe it.", "cardinality": "0.1", "type": "str"}]}, {"id": "cmip6.atmoschem.emissions_concentrations", "label": "Emissions Concentrations", "description": "Atmospheric chemistry emissions", "contact": "David Hassell", "properties": [{"id": "cmip6.atmoschem.emissions_concentrations.overview", "label": "Overview", "description": "Overview atmospheric chemistry emissions", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.sources", "label": "Surface Emissions > Sources", "description": "Sources of the chemical species emitted at the surface that are taken into account in the emissions scheme", "cardinality": "0.N", "type": "enum", "enum": {"id": "Sources of the chemical species emitted at the surface that are taken into account in the emissions scheme", "label": "Surface Source Types", "description": "Sources of the chemical species emitted at the surface that are taken into account in the emissions scheme", "is_open": true, "choices": [{"description": null, "value": "Vegetation"}, {"description": null, "value": "Soil"}, {"description": null, "value": "Sea surface"}, {"description": null, "value": "Anthropogenic"}, {"description": null, "value": "Biomass burning"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.method", "label": "Surface Emissions > Method", "description": "Methods used to define chemical species emitted directly into model layers above the surface (several methods allowed because the different species may not use the same method).", "cardinality": "0.N", "type": "enum", "enum": {"id": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "label": "Emissions Methods", "description": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "is_open": true, "choices": [{"description": null, "value": "Climatology"}, {"description": null, "value": "Spatially uniform mixing ratio"}, {"description": null, "value": "Spatially uniform concentration"}, {"description": null, "value": "Interactive"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.prescribed_climatology_emitted_species", "label": "Surface Emissions > Prescribed Climatology Emitted Species", "description": "List of chemical species emitted at the surface and prescribed via a climatology, and the nature of the climatology (E.g. CO (monthly), C2H6 (constant))", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.prescribed_spatially_uniform_emitted_species", "label": "Surface Emissions > Prescribed Spatially Uniform Emitted Species", "description": "List of chemical species emitted at the surface and prescribed as spatially uniform", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.interactive_emitted_species", "label": "Surface Emissions > Interactive Emitted Species", "description": "List of chemical species emitted at the surface and specified via an interactive method", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.surface_emissions.other_emitted_species", "label": "Surface Emissions > Other Emitted Species", "description": "List of chemical species emitted at the surface and specified via any other method", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.sources", "label": "Atmospheric Emissions > Sources", "description": "Sources of chemical species emitted in the atmosphere that are taken into account in the emissions scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Sources of the chemical species emitted in the atmosphere that are taken into account in the emissions scheme", "label": "Atmospheric Source Types", "description": "Sources of the chemical species emitted in the atmosphere that are taken into account in the emissions scheme", "is_open": true, "choices": [{"description": null, "value": "Aircraft"}, {"description": null, "value": "Biomass burning"}, {"description": null, "value": "Lightning"}, {"description": null, "value": "Volcanos"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.method", "label": "Atmospheric Emissions > Method", "description": "Methods used to define the chemical species emitted in the atmosphere (several methods allowed because the different species may not use the same method).", "cardinality": "0.N", "type": "enum", "enum": {"id": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "label": "Emissions Methods", "description": "Method used to define chemical species emitted (several methods allowed because the different species may not use the same method).", "is_open": true, "choices": [{"description": null, "value": "Climatology"}, {"description": null, "value": "Spatially uniform mixing ratio"}, {"description": null, "value": "Spatially uniform concentration"}, {"description": null, "value": "Interactive"}]}}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.prescribed_climatology_emitted_species", "label": "Atmospheric Emissions > Prescribed Climatology Emitted Species", "description": "List of chemical species emitted in the atmosphere and prescribed via a climatology (E.g. CO (monthly), C2H6 (constant))", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.prescribed_spatially_uniform_emitted_species", "label": "Atmospheric Emissions > Prescribed Spatially Uniform Emitted Species", "description": "List of chemical species emitted in the atmosphere and prescribed as spatially uniform", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.interactive_emitted_species", "label": "Atmospheric Emissions > Interactive Emitted Species", "description": "List of chemical species emitted in the atmosphere and specified via an interactive method", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.atmospheric_emissions.other_emitted_species", "label": "Atmospheric Emissions > Other Emitted Species", "description": "List of chemical species emitted in the atmosphere and specified via an \"other method\"", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.concentrations.prescribed_lower_boundary", "label": "Concentrations > Prescribed Lower Boundary", "description": "List of species prescribed at the lower boundary.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.emissions_concentrations.concentrations.prescribed_upper_boundary", "label": "Concentrations > Prescribed Upper Boundary", "description": "List of species prescribed at the upper boundary.", "cardinality": "0.1", "type": "str"}]}, {"id": "cmip6.atmoschem.gas_phase_chemistry", "label": "Gas Phase Chemistry", "description": "Atmospheric chemistry transport", "contact": "Charlotte Pascoe, David Hassell", "properties": [{"id": "cmip6.atmoschem.gas_phase_chemistry.overview", "label": "Overview", "description": "Overview gas phase atmospheric chemistry", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.species", "label": "Species", "description": "Species included in the gas phase chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Species included in the gas phase chemistry scheme.", "label": "Species Types", "description": "Species included in the gas phase chemistry scheme.", "is_open": true, "choices": [{"description": null, "value": "HOx"}, {"description": null, "value": "NOy"}, {"description": null, "value": "Ox"}, {"description": null, "value": "Cly"}, {"description": null, "value": "HSOx"}, {"description": null, "value": "Bry"}, {"description": null, "value": "VOCs"}, {"description": null, "value": "isoprene"}, {"description": null, "value": "H2O"}]}}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_bimolecular_reactions", "label": "Number Of Bimolecular Reactions", "description": "The number of bi-molecular reactions in the gas phase chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_termolecular_reactions", "label": "Number Of Termolecular Reactions", "description": "The number of ter-molecular reactions in the gas phase chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_tropospheric_heterogenous_reactions", "label": "Number Of Tropospheric Heterogenous Reactions", "description": "The number of reactions in the tropospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_stratospheric_heterogenous_reactions", "label": "Number Of Stratospheric Heterogenous Reactions", "description": "The number of reactions in the stratospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_advected_species", "label": "Number Of Advected Species", "description": "The number of advected species in the gas phase chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.number_of_steady_state_species", "label": "Number Of Steady State Species", "description": "The number of gas phase species for which the concentration is updated in the chemical solver assuming photochemical steady state", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.interactive_dry_deposition", "label": "Interactive Dry Deposition", "description": "Is dry deposition interactive (as opposed to prescribed)? Dry deposition describes the dry processes by which gaseous species deposit themselves on solid surfaces thus decreasing their concentration in the air.", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.wet_deposition", "label": "Wet Deposition", "description": "Is wet deposition included? Wet deposition describes the moist processes by which gaseous species deposit themselves on solid surfaces thus decreasing their concentration in the air.", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.gas_phase_chemistry.wet_oxidation", "label": "Wet Oxidation", "description": "Is wet oxidation included? Oxidation describes the loss of electrons or an increase in oxidation state by a molecule", "cardinality": "1.1", "type": "bool"}]}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry", "label": "Stratospheric Heterogeneous Chemistry", "description": "Atmospheric chemistry startospheric heterogeneous chemistry", "contact": "Charlotte Pascoe, David Hassell", "properties": [{"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.overview", "label": "Overview", "description": "Overview stratospheric heterogenous atmospheric chemistry", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.gas_phase_species", "label": "Gas Phase Species", "description": "Gas phase species included in the stratospheric heterogeneous chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Gas phase species included in the stratospheric heterogeneous chemistry scheme", "label": "Gas Phase Species", "description": "Gas phase species included in the stratospheric heterogeneous chemistry scheme", "is_open": false, "choices": [{"description": null, "value": "Cly"}, {"description": null, "value": "Bry"}, {"description": null, "value": "NOy"}]}}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.aerosol_species", "label": "Aerosol Species", "description": "Aerosol species included in the stratospheric heterogeneous chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "label": "Aerosol Species", "description": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "is_open": false, "choices": [{"description": null, "value": "Sulphate"}, {"description": null, "value": "Polar stratospheric ice"}, {"description": null, "value": "NAT (Nitric acid trihydrate)"}, {"description": null, "value": "NAD (Nitric acid dihydrate)"}, {"description": null, "value": "STS (supercooled ternary solution aerosol particule))"}]}}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.number_of_steady_state_species", "label": "Number Of Steady State Species", "description": "The number of steady state species in the stratospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.sedimentation", "label": "Sedimentation", "description": "Is sedimentation is included in the stratospheric heterogeneous chemistry scheme or not?", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.stratospheric_heterogeneous_chemistry.coagulation", "label": "Coagulation", "description": "Is coagulation is included in the stratospheric heterogeneous chemistry scheme or not?", "cardinality": "1.1", "type": "bool"}]}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry", "label": "Tropospheric Heterogeneous Chemistry", "description": "Atmospheric chemistry tropospheric heterogeneous chemistry", "contact": "David Hassell", "properties": [{"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.overview", "label": "Overview", "description": "Overview tropospheric heterogenous atmospheric chemistry", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.gas_phase_species", "label": "Gas Phase Species", "description": "List of gas phase species included in the tropospheric heterogeneous chemistry scheme.", "cardinality": "0.1", "type": "str"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.aerosol_species", "label": "Aerosol Species", "description": "Aerosol species included in the tropospheric heterogeneous chemistry scheme.", "cardinality": "0.N", "type": "enum", "enum": {"id": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "label": "Aerosol Species", "description": "Aerosol species included in the stratospheric heterogeneous chemistry scheme", "is_open": false, "choices": [{"description": null, "value": "Sulphate"}, {"description": null, "value": "Nitrate"}, {"description": null, "value": "Sea salt"}, {"description": null, "value": "Dust"}, {"description": null, "value": "Ice"}, {"description": null, "value": "Organic"}, {"description": null, "value": "Black carbon/soot"}, {"description": null, "value": "Polar stratospheric ice"}, {"description": null, "value": "Secondary organic aerosols"}, {"description": null, "value": "Particulate organic matter"}]}}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.number_of_steady_state_species", "label": "Number Of Steady State Species", "description": "The number of steady state species in the tropospheric heterogeneous chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.interactive_dry_deposition", "label": "Interactive Dry Deposition", "description": "Is dry deposition interactive (as opposed to prescribed)? Dry deposition describes the dry processes by which gaseous species deposit themselves on solid surfaces thus decreasing their concentration in the air.", "cardinality": "1.1", "type": "bool"}, {"id": "cmip6.atmoschem.tropospheric_heterogeneous_chemistry.coagulation", "label": "Coagulation", "description": "Is coagulation is included in the tropospheric heterogeneous chemistry scheme or not?", "cardinality": "1.1", "type": "bool"}]}, {"id": "cmip6.atmoschem.photo_chemistry", "label": "Photo Chemistry", "description": "Atmospheric chemistry photo chemistry", "contact": "Charlotte Pascoe, David Hassell", "properties": [{"id": "cmip6.atmoschem.photo_chemistry.overview", "label": "Overview", "description": "Overview atmospheric photo chemistry", "cardinality": "1.1", "type": "str"}, {"id": "cmip6.atmoschem.photo_chemistry.number_of_reactions", "label": "Number Of Reactions", "description": "The number of reactions in the photo-chemistry scheme.", "cardinality": "1.1", "type": "int"}, {"id": "cmip6.atmoschem.photo_chemistry.photolysis.method", "label": "Photolysis > Method", "description": "Photolysis scheme", "cardinality": "1.1", "type": "enum", "enum": {"id": "Photolysis scheme", "label": "Photolysis Methods", "description": "Photolysis scheme", "is_open": false, "choices": [{"description": null, "value": "Offline (clear sky)"}, {"description": null, "value": "Offline (with clouds)"}, {"description": null, "value": "Online"}]}}, {"id": "cmip6.atmoschem.photo_chemistry.photolysis.environmental_conditions", "label": "Photolysis > Environmental Conditions", "description": "Describe any environmental conditions taken into account by the photolysis scheme (e.g. whether pressure- and temperature-sensitive cross-sections and quantum yields in the photolysis calculations are modified to reflect the modelled conditions.)", "cardinality": "0.1", "type": "str"}]}]});

}(this.APP));
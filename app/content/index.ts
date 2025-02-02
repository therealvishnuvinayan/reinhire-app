import { BiHomeSmile } from 'react-icons/bi';
import { FaBriefcase, FaUserFriends, FaUsers } from 'react-icons/fa';

export const sidebarMenus = [
  { id: 1, name: 'Dashboard', link: '/', icon: BiHomeSmile },
  { id: 2, name: 'Jobs', link: '/jobs', icon: FaBriefcase },
  { id: 3, name: 'Interviews', link: '/interviews', icon: FaUsers },
  { id: 4, name: 'Job Seekers', link: '/job-seekers', icon: FaUserFriends },
  // { id: 5, name: 'Settings', link: '/settings', icon: FaCogs },
];

export const industries = [
  { key: 'accounting', label: 'Accounting' },
  { key: 'airlines_aviation', label: 'Airlines/Aviation' },
  {
    key: 'alternative_dispute_resolution',
    label: 'Alternative Dispute Resolution',
  },
  { key: 'alternative_medicine', label: 'Alternative Medicine' },
  { key: 'animation', label: 'Animation' },
  { key: 'apparel_fashion', label: 'Apparel & Fashion' },
  { key: 'architecture_planning', label: 'Architecture & Planning' },
  { key: 'arts_crafts', label: 'Arts & Crafts' },
  { key: 'automotive', label: 'Automotive' },
  { key: 'aviation_aerospace', label: 'Aviation & Aerospace' },
  { key: 'banking', label: 'Banking' },
  { key: 'biotechnology', label: 'Biotechnology' },
  { key: 'broadcast_media', label: 'Broadcast Media' },
  { key: 'building_materials', label: 'Building Materials' },
  {
    key: 'business_supplies_equipment',
    label: 'Business Supplies & Equipment',
  },
  { key: 'capital_markets', label: 'Capital Markets' },
  { key: 'chemicals', label: 'Chemicals' },
  { key: 'civic_social_organization', label: 'Civic & Social Organization' },
  { key: 'civil_engineering', label: 'Civil Engineering' },
  { key: 'commercial_real_estate', label: 'Commercial Real Estate' },
  { key: 'computer_network_security', label: 'Computer & Network Security' },
  { key: 'computer_games', label: 'Computer Games' },
  { key: 'computer_hardware', label: 'Computer Hardware' },
  { key: 'computer_networking', label: 'Computer Networking' },
  { key: 'computer_software', label: 'Computer Software' },
  { key: 'construction', label: 'Construction' },
  { key: 'consumer_electronics', label: 'Consumer Electronics' },
  { key: 'consumer_goods', label: 'Consumer Goods' },
  { key: 'consumer_services', label: 'Consumer Services' },
  { key: 'cosmetics', label: 'Cosmetics' },
  { key: 'dairy', label: 'Dairy' },
  { key: 'defense_space', label: 'Defense & Space' },
  { key: 'design', label: 'Design' },
  { key: 'education_management', label: 'Education Management' },
  { key: 'e_learning', label: 'E-learning' },
  {
    key: 'electrical_electronic_manufacturing',
    label: 'Electrical & Electronic Manufacturing',
  },
  { key: 'entertainment', label: 'Entertainment' },
  { key: 'environmental_services', label: 'Environmental Services' },
  { key: 'events_services', label: 'Events Services' },
  { key: 'executive_office', label: 'Executive Office' },
  { key: 'farming', label: 'Farming' },
  { key: 'financial_services', label: 'Financial Services' },
  { key: 'fine_art', label: 'Fine Art' },
  { key: 'fishery', label: 'Fishery' },
  { key: 'food_beverages', label: 'Food & Beverages' },
  { key: 'food_production', label: 'Food Production' },
  { key: 'fundraising', label: 'Fundraising' },
  { key: 'furniture', label: 'Furniture' },
  { key: 'gambling_casinos', label: 'Gambling & Casinos' },
  { key: 'glass_ceramics_concrete', label: 'Glass, Ceramics & Concrete' },
  { key: 'government_administration', label: 'Government Administration' },
  { key: 'government_relations', label: 'Government Relations' },
  { key: 'graphic_design', label: 'Graphic Design' },
  { key: 'health_wellness_fitness', label: 'Health, Wellness & Fitness' },
  { key: 'higher_education', label: 'Higher Education' },
  { key: 'hospital_health_care', label: 'Hospital & Health Care' },
  { key: 'hospitality', label: 'Hospitality' },
  { key: 'human_resources', label: 'Human Resources' },
  { key: 'import_export', label: 'Import & Export' },
  { key: 'individual_family_services', label: 'Individual & Family Services' },
  { key: 'industrial_automation', label: 'Industrial Automation' },
  { key: 'information_services', label: 'Information Services' },
  {
    key: 'information_technology_services',
    label: 'Information Technology & Services',
  },
  { key: 'insurance', label: 'Insurance' },
  { key: 'international_affairs', label: 'International Affairs' },
  {
    key: 'international_trade_development',
    label: 'International Trade & Development',
  },
  { key: 'internet', label: 'Internet' },
  { key: 'investment_banking_venture', label: 'Investment Banking/Venture' },
  { key: 'investment_management', label: 'Investment Management' },
  { key: 'judiciary', label: 'Judiciary' },
  { key: 'law_enforcement', label: 'Law Enforcement' },
  { key: 'law_practice', label: 'Law Practice' },
  { key: 'legal_services', label: 'Legal Services' },
  { key: 'legislative_office', label: 'Legislative Office' },
  { key: 'leisure_travel', label: 'Leisure & Travel' },
  { key: 'libraries', label: 'Libraries' },
  { key: 'logistics_supply_chain', label: 'Logistics & Supply Chain' },
  { key: 'luxury_goods_jewelry', label: 'Luxury Goods & Jewelry' },
  { key: 'machinery', label: 'Machinery' },
  { key: 'management_consulting', label: 'Management Consulting' },
  { key: 'maritime', label: 'Maritime' },
  { key: 'marketing_advertising', label: 'Marketing & Advertising' },
  { key: 'market_research', label: 'Market Research' },
  {
    key: 'mechanical_industrial_engineering',
    label: 'Mechanical or Industrial Engineering',
  },
  { key: 'media_production', label: 'Media Production' },
  { key: 'medical_device', label: 'Medical Device' },
  { key: 'medical_practice', label: 'Medical Practice' },
  { key: 'mental_health_care', label: 'Mental Health Care' },
  { key: 'military', label: 'Military' },
  { key: 'mining_metals', label: 'Mining & Metals' },
  { key: 'motion_pictures_film', label: 'Motion Pictures & Film' },
  { key: 'museums_institutions', label: 'Museums & Institutions' },
  { key: 'music', label: 'Music' },
  { key: 'nanotechnology', label: 'Nanotechnology' },
  { key: 'newspapers', label: 'Newspapers' },
  {
    key: 'nonprofit_organization_management',
    label: 'Nonprofit Organization Management',
  },
  { key: 'oil_energy', label: 'Oil & Energy' },
  { key: 'online_publishing', label: 'Online Publishing' },
  { key: 'outsourcing_offshoring', label: 'Outsourcing/Offshoring' },
  { key: 'package_freight_delivery', label: 'Package/Freight Delivery' },
  { key: 'packaging_containers', label: 'Packaging & Containers' },
  { key: 'paper_forest_products', label: 'Paper & Forest Products' },
  { key: 'performing_arts', label: 'Performing Arts' },
  { key: 'pharmaceuticals', label: 'Pharmaceuticals' },
  { key: 'philanthropy', label: 'Philanthropy' },
  { key: 'photography', label: 'Photography' },
  { key: 'plastics', label: 'Plastics' },
  { key: 'political_organization', label: 'Political Organization' },
  { key: 'primary_secondary', label: 'Primary/Secondary' },
  { key: 'printing', label: 'Printing' },
  { key: 'professional_training', label: 'Professional Training' },
  { key: 'program_development', label: 'Program Development' },
  { key: 'public_policy', label: 'Public Policy' },
  { key: 'public_relations', label: 'Public Relations' },
  { key: 'public_safety', label: 'Public Safety' },
  { key: 'publishing', label: 'Publishing' },
  { key: 'railroad_manufacture', label: 'Railroad Manufacture' },
  { key: 'ranching', label: 'Ranching' },
  { key: 'real_estate', label: 'Real Estate' },
  { key: 'recreational', label: 'Recreational' },
  { key: 'facilities_services', label: 'Facilities & Services' },
  { key: 'religious_institutions', label: 'Religious Institutions' },
  { key: 'renewables_environment', label: 'Renewables & Environment' },
  { key: 'research', label: 'Research' },
  { key: 'restaurants', label: 'Restaurants' },
  { key: 'retail', label: 'Retail' },
  { key: 'security_investigations', label: 'Security & Investigations' },
  { key: 'semiconductors', label: 'Semiconductors' },
  { key: 'shipbuilding', label: 'Shipbuilding' },
  { key: 'sporting_goods', label: 'Sporting Goods' },
  { key: 'sports', label: 'Sports' },
  { key: 'staffing_recruiting', label: 'Staffing & Recruiting' },
  { key: 'supermarkets', label: 'Supermarkets' },
  { key: 'telecommunications', label: 'Telecommunications' },
  { key: 'textiles', label: 'Textiles' },
  { key: 'think_tanks', label: 'Think Tanks' },
  { key: 'tobacco', label: 'Tobacco' },
  { key: 'translation_localization', label: 'Translation & Localization' },
  {
    key: 'transportation_trucking_railroad',
    label: 'Transportation/Trucking/Railroad',
  },
  { key: 'utilities', label: 'Utilities' },
  { key: 'venture_capital', label: 'Venture Capital' },
  { key: 'veterinary', label: 'Veterinary' },
  { key: 'warehousing', label: 'Warehousing' },
  { key: 'wholesale', label: 'Wholesale' },
  { key: 'wine_spirits', label: 'Wine & Spirits' },
  { key: 'wireless', label: 'Wireless' },
  { key: 'writing_editing', label: 'Writing & Editing' },
];

export const jobTitles = [
  { key: 'academic_librarian', label: 'Academic librarian' },
  { key: 'accountant', label: 'Accountant' },
  { key: 'accounting_technician', label: 'Accounting technician' },
  { key: 'actuary', label: 'Actuary' },
  { key: 'adult_nurse', label: 'Adult nurse' },
  {
    key: 'advertising_account_executive',
    label: 'Advertising account executive',
  },
  { key: 'advertising_account_planner', label: 'Advertising account planner' },
  { key: 'advertising_copywriter', label: 'Advertising copywriter' },
  { key: 'advice_worker', label: 'Advice worker' },
  { key: 'advocate_scotland', label: 'Advocate (Scotland)' },
  { key: 'aeronautical_engineer', label: 'Aeronautical engineer' },
  { key: 'agricultural_consultant', label: 'Agricultural consultant' },
  { key: 'agricultural_manager', label: 'Agricultural manager' },
  {
    key: 'aid_worker_humanitarian_worker',
    label: 'Aid worker/humanitarian worker',
  },
  { key: 'air_traffic_controller', label: 'Air traffic controller' },
  { key: 'airline_cabin_crew', label: 'Airline cabin crew' },
  { key: 'amenity_horticulturist', label: 'Amenity horticulturist' },
  { key: 'analytical_chemist', label: 'Analytical chemist' },
  { key: 'animal_nutritionist', label: 'Animal nutritionist' },
  { key: 'animator', label: 'Animator' },
  { key: 'archaeologist', label: 'Archaeologist' },
  { key: 'architect', label: 'Architect' },
  { key: 'architectural_technologist', label: 'Architectural technologist' },
  { key: 'archivist', label: 'Archivist' },
  { key: 'armed_forces_officer', label: 'Armed forces officer' },
  { key: 'aromatherapist', label: 'Aromatherapist' },
  { key: 'art_therapist', label: 'Art therapist' },
  { key: 'arts_administrator', label: 'Arts administrator' },
  { key: 'auditor', label: 'Auditor' },
  { key: 'automotive_engineer', label: 'Automotive engineer' },
  { key: 'barrister', label: 'Barrister' },
  { key: 'barristers_clerk', label: 'Barrister’s clerk' },
  { key: 'bilingual_secretary', label: 'Bilingual secretary' },
  { key: 'biomedical_engineer', label: 'Biomedical engineer' },
  { key: 'biomedical_scientist', label: 'Biomedical scientist' },
  { key: 'biotechnologist', label: 'Biotechnologist' },
  { key: 'brand_manager', label: 'Brand manager' },
  { key: 'broadcasting_presenter', label: 'Broadcasting presenter' },
  {
    key: 'building_control_officer_surveyor',
    label: 'Building control officer/surveyor',
  },
  { key: 'building_services_engineer', label: 'Building services engineer' },
  { key: 'building_surveyor', label: 'Building surveyor' },
  { key: 'camera_operator', label: 'Camera operator' },
  {
    key: 'careers_adviser_higher_education',
    label: 'Careers adviser (higher education)',
  },
  { key: 'careers_adviser', label: 'Careers adviser' },
  { key: 'careers_consultant', label: 'Careers consultant' },
  { key: 'cartographer', label: 'Cartographer' },
  { key: 'catering_manager', label: 'Catering manager' },
  { key: 'charities_administrator', label: 'Charities administrator' },
  { key: 'charities_fundraiser', label: 'Charities fundraiser' },
  { key: 'chemical_process_engineer', label: 'Chemical (process) engineer' },
  { key: 'child_psychotherapist', label: 'Child psychotherapist' },
  { key: 'childrens_nurse', label: "Children's nurse" },
  { key: 'chiropractor', label: 'Chiropractor' },
  { key: 'civil_engineer', label: 'Civil engineer' },
  { key: 'civil_service_administrator', label: 'Civil Service administrator' },
  { key: 'clinical_biochemist', label: 'Clinical biochemist' },
  { key: 'clinical_cytogeneticist', label: 'Clinical cytogeneticist' },
  { key: 'clinical_microbiologist', label: 'Clinical microbiologist' },
  {
    key: 'clinical_molecular_geneticist',
    label: 'Clinical molecular geneticist',
  },
  { key: 'clinical_research_associate', label: 'Clinical research associate' },
  {
    key: 'clinical_scientist_tissue_typing',
    label: 'Clinical scientist - tissue typing',
  },
  {
    key: 'clothing_textile_technologist',
    label: 'Clothing and textile technologist',
  },
  { key: 'colour_technologist', label: 'Colour technologist' },
  { key: 'commercial_horticulturist', label: 'Commercial horticulturist' },
  {
    key: 'commercial_residential_rural_surveyor',
    label: 'Commercial/residential/rural surveyor',
  },
  { key: 'commissioning_editor', label: 'Commissioning editor' },
  { key: 'commissioning_engineer', label: 'Commissioning engineer' },
  { key: 'commodity_broker', label: 'Commodity broker' },
  { key: 'communications_engineer', label: 'Communications engineer' },
  { key: 'community_arts_worker', label: 'Community arts worker' },
  { key: 'community_education_officer', label: 'Community education officer' },
  { key: 'community_worker', label: 'Community worker' },
  { key: 'company_secretary', label: 'Company secretary' },
  { key: 'computer_sales_support', label: 'Computer sales support' },
  { key: 'computer_scientist', label: 'Computer scientist' },
  { key: 'conference_organiser', label: 'Conference organiser' },
  { key: 'consultant', label: 'Consultant' },
  { key: 'consumer_rights_adviser', label: 'Consumer rights adviser' },
  {
    key: 'control_instrumentation_engineer',
    label: 'Control and instrumentation engineer',
  },
  { key: 'corporate_banker', label: 'Corporate banker' },
  { key: 'corporate_treasurer', label: 'Corporate treasurer' },
  { key: 'counsellor', label: 'Counsellor' },
  { key: 'courier_tour_guide', label: 'Courier/tour guide' },
  {
    key: 'court_reporter_verbatim_reporter',
    label: 'Court reporter/verbatim reporter',
  },
  { key: 'credit_analyst', label: 'Credit analyst' },
  {
    key: 'crown_prosecution_service_lawyer',
    label: 'Crown Prosecution Service lawyer',
  },
  { key: 'crystallographer', label: 'Crystallographer' },
  { key: 'curator', label: 'Curator' },
  { key: 'customs_officer', label: 'Customs officer' },
  { key: 'cyber_security_specialist', label: 'Cyber security specialist' },
  { key: 'dance_movement_therapist', label: 'Dance movement therapist' },
  { key: 'data_analyst', label: 'Data analyst' },
  { key: 'data_scientist', label: 'Data scientist' },
  { key: 'data_visualisation_analyst', label: 'Data visualisation analyst' },
  { key: 'database_administrator', label: 'Database administrator' },
  { key: 'debt_finance_adviser', label: 'Debt/finance adviser' },
  { key: 'dental_hygienist', label: 'Dental hygienist' },
  { key: 'dentist', label: 'Dentist' },
  { key: 'design_engineer', label: 'Design engineer' },
  { key: 'dietitian', label: 'Dietitian' },
  { key: 'diplomatic_service', label: 'Diplomatic service' },
  {
    key: 'doctor_general_practitioner_gp',
    label: 'Doctor (general practitioner, GP)',
  },
  { key: 'doctor_hospital', label: 'Doctor (hospital)' },
  { key: 'dramatherapist', label: 'Dramatherapist' },
  { key: 'economist', label: 'Economist' },
  { key: 'editorial_assistant', label: 'Editorial assistant' },
  { key: 'education_administrator', label: 'Education administrator' },
  { key: 'electrical_engineer', label: 'Electrical engineer' },
  { key: 'electronics_engineer', label: 'Electronics engineer' },
  { key: 'employment_advice_worker', label: 'Employment advice worker' },
  { key: 'energy_conservation_officer', label: 'Energy conservation officer' },
  { key: 'engineering_geologist', label: 'Engineering geologist' },
  {
    key: 'environmental_education_officer',
    label: 'Environmental education officer',
  },
  {
    key: 'environmental_health_officer',
    label: 'Environmental health officer',
  },
  { key: 'environmental_manager', label: 'Environmental manager' },
  { key: 'environmental_scientist', label: 'Environmental scientist' },
  { key: 'equal_opportunities_officer', label: 'Equal opportunities officer' },
  {
    key: 'equality_diversity_officer',
    label: 'Equality and diversity officer',
  },
  { key: 'ergonomist', label: 'Ergonomist' },
  { key: 'estate_agent', label: 'Estate agent' },
  {
    key: 'european_commission_administrators',
    label: 'European Commission administrators',
  },
  { key: 'exhibition_display_designer', label: 'Exhibition display designer' },
  { key: 'exhibition_organiser', label: 'Exhibition organiser' },
  { key: 'exploration_geologist', label: 'Exploration geologist' },
  { key: 'facilities_manager', label: 'Facilities manager' },
  { key: 'field_trials_officer', label: 'Field trials officer' },
  { key: 'financial_manager', label: 'Financial manager' },
  { key: 'firefighter', label: 'Firefighter' },
  { key: 'fisheries_officer', label: 'Fisheries officer' },
  { key: 'fitness_centre_manager', label: 'Fitness centre manager' },
  { key: 'food_scientist', label: 'Food scientist' },
  { key: 'food_technologist', label: 'Food technologist' },
  { key: 'forensic_scientist', label: 'Forensic scientist' },
  { key: 'geneticist', label: 'Geneticist' },
  {
    key: 'geographical_information_systems_manager',
    label: 'Geographical information systems manager',
  },
  { key: 'geomatics_land_surveyor', label: 'Geomatics/land surveyor' },
  { key: 'government_lawyer', label: 'Government lawyer' },
  { key: 'government_research_officer', label: 'Government research officer' },
  { key: 'graphic_designer', label: 'Graphic designer' },
  { key: 'health_safety_adviser', label: 'Health and safety adviser' },
  { key: 'health_safety_inspector', label: 'Health and safety inspector' },
  { key: 'health_promotion_specialist', label: 'Health promotion specialist' },
  { key: 'health_service_manager', label: 'Health service manager' },
  { key: 'health_visitor', label: 'Health visitor' },
  { key: 'herbalist', label: 'Herbalist' },
  { key: 'heritage_manager', label: 'Heritage manager' },
  {
    key: 'higher_education_administrator',
    label: 'Higher education administrator',
  },
  {
    key: 'higher_education_advice_worker',
    label: 'Higher education advice worker',
  },
  { key: 'homeless_worker', label: 'Homeless worker' },
  { key: 'horticultural_consultant', label: 'Horticultural consultant' },
  { key: 'hotel_manager', label: 'Hotel manager' },
  { key: 'housing_adviser', label: 'Housing adviser' },
  { key: 'human_resources_officer', label: 'Human resources officer' },
  { key: 'hydrologist', label: 'Hydrologist' },
  { key: 'illustrator', label: 'Illustrator' },
  { key: 'immigration_officer', label: 'Immigration officer' },
  { key: 'immunologist', label: 'Immunologist' },
  { key: 'industrial_product_designer', label: 'Industrial/product designer' },
  { key: 'information_scientist', label: 'Information scientist' },
  { key: 'information_systems_manager', label: 'Information systems manager' },
  {
    key: 'information_technology_software_trainers',
    label: 'Information technology/software trainers',
  },
  { key: 'insurance_broker', label: 'Insurance broker' },
  { key: 'insurance_claims_inspector', label: 'Insurance claims inspector' },
  { key: 'insurance_risk_surveyor', label: 'Insurance risk surveyor' },
  { key: 'insurance_underwriter', label: 'Insurance underwriter' },
  { key: 'interpreter', label: 'Interpreter' },
  { key: 'investment_analyst', label: 'Investment analyst' },
  {
    key: 'investment_banker_corporate_finance',
    label: 'Investment banker - corporate finance',
  },
  {
    key: 'investment_banker_operations',
    label: 'Investment banker – operations',
  },
  { key: 'investment_fund_manager', label: 'Investment fund manager' },
  { key: 'it_consultant', label: 'IT consultant' },
  { key: 'it_support_analyst', label: 'IT support analyst' },
  { key: 'journalist', label: 'Journalist' },
  { key: 'laboratory_technician', label: 'Laboratory technician' },
  { key: 'land_based_engineer', label: 'Land-based engineer' },
  { key: 'landscape_architect', label: 'Landscape architect' },
  { key: 'learning_disability_nurse', label: 'Learning disability nurse' },
  { key: 'learning_mentor', label: 'Learning mentor' },
  { key: 'lecturer_adult_education', label: 'Lecturer (adult education)' },
  { key: 'lecturer_further_education', label: 'Lecturer (further education)' },
  { key: 'lecturer_higher_education', label: 'Lecturer (higher education)' },
  { key: 'legal_executive', label: 'Legal executive' },
  { key: 'leisure_centre_manager', label: 'Leisure centre manager' },
  { key: 'licensed_conveyancer', label: 'Licensed conveyancer' },
  {
    key: 'local_government_administrator',
    label: 'Local government administrator',
  },
  { key: 'local_government_lawyer', label: 'Local government lawyer' },
  {
    key: 'logistics_distribution_manager',
    label: 'Logistics/distribution manager',
  },
  { key: 'magazine_features_editor', label: 'Magazine features editor' },
  { key: 'magazine_journalist', label: 'Magazine journalist' },
  { key: 'maintenance_engineer', label: 'Maintenance engineer' },
  { key: 'management_accountant', label: 'Management accountant' },
  { key: 'manufacturing_engineer', label: 'Manufacturing engineer' },
  {
    key: 'manufacturing_machine_operator',
    label: 'Manufacturing machine operator',
  },
  { key: 'manufacturing_toolmaker', label: 'Manufacturing toolmaker' },
  { key: 'marine_scientist', label: 'Marine scientist' },
  { key: 'market_research_analyst', label: 'Market research analyst' },
  { key: 'market_research_executive', label: 'Market research executive' },
  { key: 'marketing_account_manager', label: 'Marketing account manager' },
  { key: 'marketing_assistant', label: 'Marketing assistant' },
  { key: 'marketing_executive', label: 'Marketing executive' },
  {
    key: 'marketing_manager_social_media',
    label: 'Marketing manager (social media)',
  },
  { key: 'materials_engineer', label: 'Materials engineer' },
  { key: 'materials_specialist', label: 'Materials specialist' },
  { key: 'mechanical_engineer', label: 'Mechanical engineer' },
  { key: 'media_analyst', label: 'Media analyst' },
  { key: 'media_buyer', label: 'Media buyer' },
  { key: 'media_planner', label: 'Media planner' },
  { key: 'medical_physicist', label: 'Medical physicist' },
  { key: 'medical_representative', label: 'Medical representative' },
  { key: 'mental_health_nurse', label: 'Mental health nurse' },
  { key: 'metallurgist', label: 'Metallurgist' },
  { key: 'meteorologist', label: 'Meteorologist' },
  { key: 'microbiologist', label: 'Microbiologist' },
  { key: 'midwife', label: 'Midwife' },
  { key: 'mining_engineer', label: 'Mining engineer' },
  { key: 'mobile_developer', label: 'Mobile developer' },
  { key: 'multimedia_programmer', label: 'Multimedia programmer' },
  { key: 'multimedia_specialists', label: 'Multimedia specialists' },
  { key: 'museum_education_officer', label: 'Museum education officer' },
  {
    key: 'museum_gallery_exhibition_officer',
    label: 'Museum/gallery exhibition officer',
  },
  { key: 'music_therapist', label: 'Music therapist' },
  { key: 'nanoscientist', label: 'Nanoscientist' },
  { key: 'nature_conservation_officer', label: 'Nature conservation officer' },
  { key: 'naval_architect', label: 'Naval architect' },
  { key: 'network_administrator', label: 'Network administrator' },
  { key: 'nurse', label: 'Nurse' },
  { key: 'nutritional_therapist', label: 'Nutritional therapist' },
  { key: 'nutritionist', label: 'Nutritionist' },
  { key: 'occupational_therapist', label: 'Occupational therapist' },
  { key: 'oceanographer', label: 'Oceanographer' },
  { key: 'office_manager', label: 'Office manager' },
  { key: 'operational_researcher', label: 'Operational researcher' },
  { key: 'orthoptist', label: 'Orthoptist' },
  { key: 'outdoor_pursuits_manager', label: 'Outdoor pursuits manager' },
  { key: 'packaging_technologist', label: 'Packaging technologist' },
  { key: 'paediatric_nurse', label: 'Paediatric nurse' },
  { key: 'paramedic', label: 'Paramedic' },
  { key: 'patent_attorney', label: 'Patent attorney' },
  { key: 'patent_examiner', label: 'Patent examiner' },
  { key: 'pension_scheme_manager', label: 'Pension scheme manager' },
  { key: 'personal_assistant', label: 'Personal assistant' },
  { key: 'petroleum_engineer', label: 'Petroleum engineer' },
  { key: 'pharmacist', label: 'Pharmacist' },
  { key: 'pharmacologist', label: 'Pharmacologist' },
  { key: 'pharmacovigilance_officer', label: 'Pharmacovigilance officer' },
  { key: 'photographer', label: 'Photographer' },
  { key: 'physiotherapist', label: 'Physiotherapist' },
  { key: 'picture_researcher', label: 'Picture researcher' },
  {
    key: 'planning_development_surveyor',
    label: 'Planning and development surveyor',
  },
  { key: 'planning_technician', label: 'Planning technician' },
  { key: 'plant_breeder', label: 'Plant breeder' },
  { key: 'police_officer', label: 'Police officer' },
  { key: 'political_party_agent', label: 'Political party agent' },
  {
    key: 'political_party_research_officer',
    label: 'Political party research officer',
  },
  { key: 'practice_nurse', label: 'Practice nurse' },
  { key: 'press_photographer', label: 'Press photographer' },
  { key: 'press_sub_editor', label: 'Press sub-editor' },
  { key: 'prison_officer', label: 'Prison officer' },
  { key: 'private_music_teacher', label: 'Private music teacher' },
  { key: 'probation_officer', label: 'Probation officer' },
  {
    key: 'product_development_scientist',
    label: 'Product development scientist',
  },
  { key: 'production_manager', label: 'Production manager' },
  { key: 'programme_researcher', label: 'Programme researcher' },
  { key: 'project_manager', label: 'Project manager' },
  { key: 'psychologist_clinical', label: 'Psychologist (clinical)' },
  { key: 'psychologist_educational', label: 'Psychologist (educational)' },
  { key: 'psychotherapist', label: 'Psychotherapist' },
  {
    key: 'public_affairs_consultant_lobbyist',
    label: 'Public affairs consultant (lobbyist)',
  },
  {
    key: 'public_affairs_consultant_research',
    label: 'Public affairs consultant (research)',
  },
  { key: 'public_house_manager', label: 'Public house manager' },
  { key: 'public_librarian', label: 'Public librarian' },
  {
    key: 'public_relations_pr_officer',
    label: 'Public relations (PR) officer',
  },
  { key: 'qa_analyst', label: 'QA analyst' },
  { key: 'quality_assurance_manager', label: 'Quality assurance manager' },
  { key: 'quantity_surveyor', label: 'Quantity surveyor' },
  { key: 'records_manager', label: 'Records manager' },
  { key: 'recruitment_consultant', label: 'Recruitment consultant' },
  { key: 'recycling_officer', label: 'Recycling officer' },
  { key: 'regulatory_affairs_officer', label: 'Regulatory affairs officer' },
  { key: 'research_chemist', label: 'Research chemist' },
  { key: 'research_scientist', label: 'Research scientist' },
  { key: 'restaurant_manager', label: 'Restaurant manager' },
  { key: 'retail_banker', label: 'Retail banker' },
  { key: 'retail_buyer', label: 'Retail buyer' },
  { key: 'retail_manager', label: 'Retail manager' },
  { key: 'retail_merchandiser', label: 'Retail merchandiser' },
  { key: 'retail_pharmacist', label: 'Retail pharmacist' },
  { key: 'sales_executive', label: 'Sales executive' },
  { key: 'sales_manager', label: 'Sales manager' },
  { key: 'scene_of_crime_officer', label: 'Scene of crime officer' },
  { key: 'secretary', label: 'Secretary' },
  { key: 'seismic_interpreter', label: 'Seismic interpreter' },
  { key: 'site_engineer', label: 'Site engineer' },
  { key: 'site_manager', label: 'Site manager' },
  { key: 'social_researcher', label: 'Social researcher' },
  { key: 'social_worker', label: 'Social worker' },
  { key: 'software_developer', label: 'Software developer' },
  { key: 'soil_scientist', label: 'Soil scientist' },
  { key: 'solicitor', label: 'Solicitor' },
  { key: 'speech_language_therapist', label: 'Speech and language therapist' },
  { key: 'sports_coach', label: 'Sports coach' },
  { key: 'sports_development_officer', label: 'Sports development officer' },
  { key: 'sports_therapist', label: 'Sports therapist' },
  { key: 'statistician', label: 'Statistician' },
  { key: 'stockbroker', label: 'Stockbroker' },
  { key: 'structural_engineer', label: 'Structural engineer' },
  { key: 'systems_analyst', label: 'Systems analyst' },
  { key: 'systems_developer', label: 'Systems developer' },
  { key: 'tax_inspector', label: 'Tax inspector' },
  {
    key: 'teacher_nursery_early_years',
    label: 'Teacher (nursery/early years)',
  },
  { key: 'teacher_primary', label: 'Teacher (primary)' },
  { key: 'teacher_secondary', label: 'Teacher (secondary)' },
  {
    key: 'teacher_special_educational_needs',
    label: 'Teacher (special educational needs)',
  },
  {
    key: 'teaching_classroom_assistant',
    label: 'Teaching/classroom assistant',
  },
  { key: 'technical_author', label: 'Technical author' },
  { key: 'technical_sales_engineer', label: 'Technical sales engineer' },
  { key: 'tefl_tesl_teacher', label: 'TEFL/TESL teacher' },
  {
    key: 'television_production_assistant',
    label: 'Television production assistant',
  },
  { key: 'test_automation_developer', label: 'Test automation developer' },
  { key: 'tour_operator', label: 'Tour operator' },
  { key: 'tourism_officer', label: 'Tourism officer' },
  { key: 'tourist_information_manager', label: 'Tourist information manager' },
  { key: 'town_country_planner', label: 'Town and country planner' },
  { key: 'toxicologist', label: 'Toxicologist' },
  {
    key: 'trade_union_research_officer',
    label: 'Trade union research officer',
  },
  { key: 'trader', label: 'Trader' },
  { key: 'trading_standards_officer', label: 'Trading standards officer' },
  {
    key: 'training_development_officer',
    label: 'Training and development officer',
  },
  { key: 'translator', label: 'Translator' },
  { key: 'transportation_planner', label: 'Transportation planner' },
  { key: 'travel_agent', label: 'Travel agent' },
  {
    key: 'tv_film_theatre_set_designer',
    label: 'TV/film/theatre set designer',
  },
  { key: 'ux_designer', label: 'UX designer' },
  { key: 'validation_engineer', label: 'Validation engineer' },
  { key: 'veterinary_nurse', label: 'Veterinary nurse' },
  { key: 'veterinary_surgeon', label: 'Veterinary surgeon' },
  { key: 'video_game_designer', label: 'Video game designer' },
  { key: 'video_game_developer', label: 'Video game developer' },
  { key: 'volunteer_work_organiser', label: 'Volunteer work organiser' },
  { key: 'warehouse_manager', label: 'Warehouse manager' },
  { key: 'waste_disposal_officer', label: 'Waste disposal officer' },
  { key: 'water_conservation_officer', label: 'Water conservation officer' },
  { key: 'water_engineer', label: 'Water engineer' },
  { key: 'web_designer', label: 'Web designer' },
  { key: 'web_developer', label: 'Web developer' },
  { key: 'welfare_rights_adviser', label: 'Welfare rights adviser' },
  { key: 'writer', label: 'Writer' },
  { key: 'youth_worker', label: 'Youth worker' },
];

export const experienceLevels = [
  { key: 'entry_level', label: 'Entry-level' },
  { key: 'junior_level', label: 'Junior-level' },
  { key: 'mid_level', label: 'Mid-level' },
  { key: 'senior_level', label: 'Senior-level' },
  { key: 'managerial', label: 'Managerial' },
  { key: 'executive', label: 'Executive' }
];


export const keySkills = [
  { key: 'communication', label: 'Communication' },
  { key: 'problem_solving', label: 'Problem-solving' },
  { key: 'technical_knowledge', label: 'Technical Knowledge' },
  { key: 'teamwork', label: 'Teamwork' },
  { key: 'adaptability', label: 'Adaptability' },
  { key: 'time_management', label: 'Time Management' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'attention_to_detail', label: 'Attention to Detail' },
  { key: 'customer_service', label: 'Customer Service' },
  { key: 'critical_thinking', label: 'Critical Thinking' },
  { key: 'project_management', label: 'Project Management' },
  { key: 'creativity', label: 'Creativity' },
  { key: 'interpersonal_skills', label: 'Interpersonal Skills' },
  { key: 'negotiation', label: 'Negotiation' },
  { key: 'decision_making', label: 'Decision-making' },
  { key: 'conflict_resolution', label: 'Conflict Resolution' },
  { key: 'technical_support', label: 'Technical Support' },
  { key: 'data_analysis', label: 'Data Analysis' },
  { key: 'sales', label: 'Sales' },
  { key: 'marketing', label: 'Marketing' }
];



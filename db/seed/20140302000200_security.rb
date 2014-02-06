# DESTROY EXISTING SECURITY DATA =====================================================================
Buildit::User.delete_all
Buildit::UserRole.delete_all
Buildit::Role.delete_all
Buildit::Application.delete_all
Buildit::ApplicationRole.delete_all

# APPLICATIONS =====================================================================
# PLATFORM CONSOLE
Buildit::Application.create(
  application_id:       'AC41CFBEFAC211E2BPLATFORMCONSOLE',
  application_code:     'PLATFORM_CONSOLE',
  application_name:     'Platform Console',
  hub_xtype:            'buildit-app-SuperHub',
  description:          'The Super Administrator desktop provides access to all key SDK level features under a single desktop. It is not designed to be modified by custom projects.',
  is_enabled:           true
)

# DESK ERP DESKTOP
Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20C9DDESKERP',
  application_code:     'DESK',
  hub_xtype:            'desk-app-Hub',
  application_name:     'My Desk',
  description:          "The complete help desk solution.",
  is_enabled:           1
  )

# ROLES =====================================================================
# POWER ROLE
Buildit::Role.create(
  role_id:                 '323244F0204011EFCFE9040CCEDPOWER',
  role_code:               'POWER_USER',
  description:             'access to most of the desk system',
  is_enabled:              true,
  auto_assign:             false
)
# ADMIN ROLE
Buildit::Role.create(
  role_id:                 '323244F0204011EFCFE904SUPERADMIN',
  role_code:               'SUPER_ADMIN',
  description:             'The highest-level administrator of the system',
  is_enabled:              true,
  auto_assign:             false
)

# APPLICATION ROLES =====================================================================
# DESK POWER USER GETS DESK ERP DESKTOP
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE9040CCEDPOWER', application_id: '6900AE7AC18B11E289BA20C9DDESKERP').each { |x| x.is_enabled = true; x.save }

# SUPER ADMIN ROLE GETS ALL APPLICATIONS
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE904SUPERADMIN').each { |x| x.is_enabled = true; x.save }

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'a',
  sso_plugin_code: 'BUILDIT',
  password: 'a',
  password_confirmation: 'a'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PARKER',
  first_name: 'Parker',
  last_name: 'Demo',
  email_address: 'demo',
  sso_plugin_code: 'BUILDIT',
  password: 'demo',
  password_confirmation: 'demo'
)

Buildit::UserRole.where(user_id: '811166D4D50A11E2B45820C9D0PARKER', role_id: '323244F0204011EFCFE904SUPERADMIN').each {|x| x.delete}
# # DESK ERP ADMIN HUB
# Buildit::Application.create(
#   application_id:       '6900AE7AC18B11E289BA20CDESKADMIN',
#   application_code:     'DESK_ADMIN',
#   hub_xtype:            'desk-app-AdminHub',
#   application_name:     'Desk ERP Administration',
#   description:          "The admin console for the ERP solution for Parker School Uniforms",
#   is_enabled:           1
#   )

# USERS =====================================================================
# Buildit::User.create(
#   user_id: 'FB0ACB1AFAC111E2B25720SYSBUILDIT',
#   first_name: 'System',
#   last_name: 'Administrator',
#   email_address: 'sys@buildit.io',
#   sso_plugin_code: 'BUILDIT'
# )

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D04AAJIM',
#   first_name: 'Jim',
#   last_name: 'Mullady',
#   email_address: 'jmullady@parkersu.com',
#   sso_plugin_code: 'BUILDIT'
# )

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D04ASEAN',
#   first_name: 'Sean',
#   last_name: 'Northrup',
#   email_address: 'snorthrup@truegrits.com',
#   sso_plugin_code: 'BUILDIT'
# )

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820CDEMOSUSEN',
#   first_name: 'Susen',
#   last_name: 'Sarpa',
#   email_address: 'smsarpa@truegrits.com',
#   sso_plugin_code: 'BUILDIT'
# )

# Buildit::User.create(
#   user_id: 'AOEUID234567EUID56789IDHT87654RG',
#   first_name: 'Roy',
#   last_name: 'Garcia',
#   email_address: 'rgarcia@parkersu.com',
#   sso_plugin_code: 'BUILDIT'
# )

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D04ATROY',
#   first_name: 'Troy',
#   last_name: 'Pike',
#   email_address: 'tpike@parkersu.com',
#   sso_plugin_code: 'BUILDIT'
# )

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D04ATTTT',
#   first_name: 'Tom',
#   last_name: 'Henderson',
#   email_address: 't',
#   sso_plugin_code: 'BUILDIT'
# )

# SET PASSWORDS =====================================================================
# Buildit::User.all.each do |u|
#   u.password = 'parker' # set password
#   u.password_confirmation = 'parker'
#   u.save
# end

# x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D0PARKER').first
# x.password = 'demo'
# x.password_confirmation = 'demo'
# x.save



# x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D04ATTTT').first
# x.password = 't'
# x.password_confirmation = 't'
# x.save

# x = Buildit::User.where(:user_id => 'FB0ACB1AFAC111E2B25720SYSBUILDIT').first
# x.password = 'password'
# x.password_confirmation = 'password'
# x.save



# USER ROLES =====================================================================
# everyone is at least a power user
# user_id = '811166D4D50A11E2B45820C9D04AARON'
# role_id = '323244F0204011EFCFE904SUPERADMIN'
# ur=Buildit::UserRole.create(user_id: user_id, role_id: role_id, is_enabled: true)
# Buildit::User.all.each do |u|
  # puts u.user_id
  # puts u.full_name
  # ur = u.user_roles.where(:role_id => '323244F0204011EFCFE9040CCEDPOWER').first
  # ur = Buildit::UserRole.where(:role_id => '323244F0204011EFCFE9040CCEDPOWER', :user_id => u.user_id).first
  # ur.is_enabled = true
  # ur.save
# end

# SUPER ADMINSTRATOR ROLE

# Buildit::User.where("email_address in ('a','t')").each do |u|
#   ur = Buildit::UserRole.where(role_id: '323244F0204011EFCFE904SUPERADMIN', user_id: u.user_id).first
#   ur.is_enabled = true
#   ur.save
# end



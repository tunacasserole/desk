# APPLICATIONS =====================================================================

# MY DESK and MY OFFICE applications
Buildit::Application.where(application_id: ['6900AE7AC18B11E289BA2XXX0C9DDESK', '6900AE18B11MYOFFICEAKAADMIN4DESK']).each {|x| x.delete}
Buildit::Application.create(application_id:'6900AE7AC18B11E289BA2XXX0C9DDESK',application_code:'DESK',hub_xtype:'desk-app-Hub',application_name:'My Desk',description:"The complete help desk solution.")
Buildit::Application.create(application_id:'6900AE18B11MYOFFICEAKAADMIN4DESK',application_code:'OFFICE',hub_xtype:'desk-app-AdminHub',application_name:'The Office',description:"Administer, setup, maintain & work with Desk related data.")


# ROLES =====================================================================

# POWER USER ROLE
Buildit::Role.create(role_id:'323244F0204011EFCFE9040CCEDPOWER',role_code: 'POWER_USER',description:'access to most of the omni system') unless Buildit::Role.where(role_id:'323244F0204011EFCFE9040CCEDPOWER',role_code:'POWER_USER').first
# user role gets my desk application
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE9040CCEDPOWER', application_id: '6900AE7AC18B11E289BA2XXX0C9DDESK').each { |x| x.is_enabled = true; x.save }


# SUPER ADMINSTRATOR ROLE
role = Buildit::Role.where(role_code: 'SUPER_ADMIN').first || Buildit::Role.create(role_id:'323244F0204011EFCFE904SUPERADMIN',role_code: 'SUPER_ADMIN',description: 'The highest-level administrator of the system')

# admin role gets my office application
Buildit::ApplicationRole.where(role_id: role.role_id, application_id: '6900AE18B11MYOFFICEAKAADMIN4DESK').each { |x| x.is_enabled = true; x.save }


# USERS =====================================================================

# ADMIN
Buildit::User.create(email_address: 'a', first_name: 'Aaron', last_name: 'Henderson', user_id: '811166D4D50A11E2B45820C9D04AARON', sso_plugin_code: 'BUILDIT', password: 'a', password_confirmation: 'a', ) unless Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first
Buildit::UserRole.where(user_id: '811166D4D50A11E2B45820C9D04AARON').each {|x| x.is_enabled = true; x.save} # enable every role for admin

# REGULAR USER
Buildit::User.create(email_address: 't',first_name: 'Tom',last_name: 'Henderson',user_id: '811166D4D50A11E2B45820C9D04ATTTT',sso_plugin_code: 'BUILDIT',password: 't',  password_confirmation: 't') unless Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04ATTTT').first
Buildit::UserRole.where(user_id: '811166D4D50A11E2B45820C9D04ATTTT', :role_id => '323244F0204011EFCFE9040CCEDPOWER').each {|x| x.is_enabled = true; x.save}
Buildit::UserRole.where(is_enabled: false).each {|x| x.delete}

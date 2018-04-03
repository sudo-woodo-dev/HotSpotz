# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
avatar_path = "#{Rails.root}/app/assets/images/Default_Profile_Image.jpg"
image_file = File.new(avatar_path)
#
# Avatar.create(:id => 1,  :asset => ActionDispatch::Http::UploadedFile.new( :filename => File.basename(image_file),     :tempfile => image_file, :type => MIME::Types.type_for(image_path).first.content_type) )

User.create({name: 'sudowoodo', username: 'sudowoodo', email: 'email@sudowoodo.com', password: 'Password1', password_confirmation: 'Password1', avatar_base: "$image_file"})

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

10.times do
    User.create(
        name: Faker::Name.name,
        age: rand(5...85)
    )
end

10.times do
    Bird.create(
        name: Faker::Creature::Bird.implausible_common_name,
        adj: Faker::Creature::Bird.adjective
    )
end
# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  lat         :float
#  lng         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seating     :integer
#

require 'test_helper'

class BenchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

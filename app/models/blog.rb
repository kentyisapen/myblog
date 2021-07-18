class Blog < ApplicationRecord
  after_save :create_id_digest # saveが完了した後に呼び出されるコールバック
  mount_uploader :image, ImageUploader

  def to_param
    id_digest
  end

  private

  # after_saveによって呼び出されるメソッド
  def create_id_digest
    if id_digest.nil?
      new_digest = Digest::MD5.hexdigest(id.to_s)
      update_column(:id_digest, new_digest)
    end
  end
end

module ApplicationHelper
  
  require "redcarpet"
  require "coderay"
  
  class HTMLwithCoderay < Redcarpet::Render::HTMLwithCoderay
    def block_code(code,language)
      language=language.split(':')[0]
      
      case language.to_s
      when 'rb'
        lang='ruby'
      when 'yml'
        lang ='yml'
      when 'css'
        lang="css"
      
end

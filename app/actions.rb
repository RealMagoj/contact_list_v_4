# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  @contacts = Contact.all
  content_type :json
  @contacts.to_json
end

post '/contacts/new' do
  @contact = Contact.new(
    name: params[:name],
    email: params[:email]
  )
  if @contact.save
    return @contact.to_json
  end
end

delete '/contacts/delete' do
  @contact = Contact.find(params[:id])
  @contact.destroy
end

get '/contacts/show/:id' do
  @contact = Contact.find(params[:id])
  @contact.to_json
end
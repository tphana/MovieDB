function doResponse(code,body,mimetype){
pstmt = conn.prepareStatement( "select a.name, a.date_of_birth, a.place_of_birth from movies.actors as a join movies.starring as m on a.actor_id = m.actor_id where m.film_id=?" );
var result=[],block;
while(rs.next()){
	block = rs.getString(1);
rs.close();
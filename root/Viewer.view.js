
sap.ui.jsview("movie.demo.Viewer", {
    getControllerName : function() {
	
        //Create an instance of the table control
        
        //Define the columns and the control templates to be used
        this.getController().init(oTable,oArea);
        // create a simple Input field without automatic wrapping
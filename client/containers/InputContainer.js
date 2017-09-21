import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import ImageComponent from '../components/ImageComponent';
import { setResourceAction, 
				 setLocationAction,
				 setDeleteFilesAction,
				 setClearCacheAction,
				 setRunTypeAction,
				 setEmailAction,
				 displayResultsAction,
				 addImagesToStore,
				 resetEverything
	 			} from '../actions/index';

const mapStateToProps = state => ({
	resourceType: state.inputParams.resourceType,
	clearCache: state.inputParams.clearCache,
	deleteFiles: state.inputParams.deleteFiles,
	email: state.inputParams.email,
	location: state.inputParams.location,
	runType: state.inputParams.runType
});

const mapDispatchToProps = dispatch => ({
	
	setResourceType: (value) => {
	  dispatch(setResourceAction(value));
	},

	setLocation: (value) => {
	  dispatch(setLocationAction(value));
	},

	setDeleteFiles: () => {
		dispatch(setDeleteFilesAction());
	},

	setClearCache: () => {
		dispatch(setClearCacheAction());
	},

	setRunType: () => {
		dispatch(setRunTypeAction());
	},

	setEmail: (value) => {
		dispatch(setEmailAction(value));
	},

	syncResApiCall: (obj) => {

		var userName;

		for (var i = 0; i < obj.email.length; i++){
			if (obj.email[i] === "@"){
				var sliceHere = i;
				userName = obj.email.slice(0, sliceHere);
			}
		}

		var data = {
			"cache":obj.clearCache,
			"delete":obj.deleteFiles,
			"user": userName,
			"email": obj.email,
			"loc": obj.location,
			"live": obj.runType,
			"template": obj.resourceType,
			"ct_service":1
		}

		// for dev purposes, just overwrite the user's input data and replace it with this hardcoded data for now. 
		// var data = {
		// 	"cache":true,
		// 	"delete":true,
		// 	"user":"nmaguigad",
		// 	"email":"nmaguigad@conversantmedia.com",
		// 	"loc":"/1001/ctSyncresTest_nm/",
		// 	"live":0,
		// 	"template":"images",
		// 	"ct_service":1
		// }

		$.ajax({
		  type: "GET",
		  url: "/imageList",
		  data: data,
		  success: function(resData){

		  	var imagesArray = [];

		  	for (var i = 3; i < resData.fileList.length; i++){
		  		imagesArray.push({src: "http://dtord01web02p.dc.dotomi.net/opslocal/images" + data["loc"] + resData.fileList[i], name:resData.fileList[i]})
		  	}

		  	dispatch(addImagesToStore(imagesArray));

		  	data.imagesCount = resData.fileList.length;
		  	dispatch(displayResultsAction(data))

			}

		});

	},

	reset: () => {
		dispatch(resetEverything());
	}

});

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);

import moment from "moment";

const formatDate = (
	originalDate: string | Date | undefined | null,
	isNormalDate = false
) => {
	if (!originalDate) {
		return "-";
	}
	let formattedDate;
	if (isNormalDate) {
		formattedDate = moment(originalDate).format("YYYY-MM-DD");
	} else {
		formattedDate = moment(originalDate).format("YYYY-MM-DD HH:mm:ss");
	}
	return formattedDate;
};

export default formatDate;

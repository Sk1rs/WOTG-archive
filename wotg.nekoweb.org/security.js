function checkAccess(requiredStage) {
	const progress = sessionStorage.getItem("story_progress");

	// Если прогресс меньше нужного, выкидываем в начало
	if (!progress || parseInt(progress) < requiredStage) {
		window.location.href = "index.html";
	}
}

export const dashboardView = (req, res) => {
  res.render('dashboard', { project_name: process.env.APP_NAME })
}

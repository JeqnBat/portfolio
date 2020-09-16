$(function() {
  let view = new View()
  let model = new Model(view)
  let controller = new Controller(model)
  let project = []

  for (let i = 0; i < data.length; i++) {
    project[i] = new Project(data[i].title, i+2, data[i].descr, data[i].img, data[i].date, data[i].color, techIcons, data[i].resp, data[i].github)
    view.printMiniature(project[i])
    controller.miniMouseOver(project[i])
  }

  console.log(project)

  controller.titleClick()
  controller.langClick()
})

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `<!-- navigation bar -->
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <a class="navbar-brand"><span class="glyphicon glyphicon-time"></span> ToDo - Angular</a>
            <h4 class="navbar-text navbar-right"> <span class="glyphicon glyphicon-user"></span> {{ user.firstName }} &nbsp;</h4>
        </div>
    </nav>

        <!-- show the tasks -->
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <!--<tr>
                        <th></th>
                        <th>Task</th>
                        <th></th>
                    </tr>-->
                    <tr>
                        <th></th>
                        <th><input type="text" class="form-control" placeholder="Task" [(ngModel)]="task.name" (keyup)="keyAddTask($event)"></th>
                        <th>
                            <button class="btn btn-s" (click)="addTask()">
                                <span class="glyphicon glyphicon-plus-sign"></span>
                            </button>
                        </th>
                </thead>
                <tbody>
                    <tr *ngFor="let task of tasks">
                        <td>
                            <span class="glyphicon glyphicon-check"></span>
                        </td>
                        <td>{{ task.name }}</td>
                        <td>
                            <button class="btn btn-s" (click)="deleteEvent($index)">
                                <span class="glyphicon glyphicon-ok"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`,
        directives: [ng.common.NgFor]
    })
    .Class({
      constructor: function() {
          this.task = { name: '' };
          this.tasks = [];
          this.user = { username: '', firstName: 'Clay', lastName: 'Schumacher' };
      },
      fetchTasks: function() {
          var tasks = [
                {
                    id: 1,
                    name: 'Buy Milk'
                },
                {
                    id: 2,
                    name: 'Find Keys'
                },
                {
                    id: 3,
                    name: 'Drive to Store'
                }
            ];
            this.tasks = this.tasks.concat(tasks);
      },
      addTask: function() {
          if (this.task.name) {
              this.tasks.push(this.task);
              this.task = { name: '' };
            }
      },
      deleteEvent: function(index) {
          this.tasks.splice(index, 1);
      },
      ngOnInit: function() {
          this.fetchTasks();
      },
      keyAddTask: function(event) {
        if (event.keyCode === 13) {
                this.addTask();
            }
      }
    });
})(window.app || (window.app = {}));

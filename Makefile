backend: clean
	@echo [todo-list-back download...]
	@git clone https://github.com/mcauto/todo-list-back.git
	@ln -s ${PWD}/todo-list-back ${GOPATH}/src/todo-list-back
	@cd ${GOPATH}/src/todo-list-back && pwd && make && cd build && ./todo-list-back

front: 
	@yarn start

clean:
	@pgrep todo-list-back |xargs kill -9 # kill todo-list-back process
	@rm -rf todo-list-back

.PHONY: backend front clean
runserver:
	@echo "Running server............"
	@cd backend && source venv/bin/activate && python manage.py runserver
	
migrate:
	@echo "Migrating the database........"
	@cd backend && python manage.py makemigrations && python manage.py migrate

install:
	@echo "Installing the dependencies......."
	@cd backend && pip install -r requirements.txt
	


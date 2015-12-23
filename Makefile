#
LIVE_MOCK_UP="live-mock-up"

mockups-setup:
	-@if [ ! -d "$(LIVE_MOCK_UP)/node_modules" ]; then \
		echo "node_modules not present, npm install will run" ; \
		(cd ${LIVE_MOCK_UP} && npm install) ; \
	fi

mockups: mockups-setup
	pushd $(LIVE_MOCK_UP) && npm start

<CardContent className="p-6">
  <h3 className="text-xl font-serif font-semibold mb-4 text-research-blue">Contact Information</h3>

  <div className="space-y-4">
    <div className="flex">
      <Mail className="h-5 w-5 text-research-light-blue mr-3 mt-0.5" />
      <div>
        <h4 className="font-medium">Email</h4>
        <p className="text-gray-600">
          <a href="mailto:avisar@dtu.dk" className="hover:text-research-light-blue transition-colors">
            avisar@dtu.dk
          </a>
          <br />
          <a href="mailto:avisheksarbajna1995@gmail.com" className="hover:text-research-light-blue transition-colors">
            avisheksarbajna1995@gmail.com
          </a>
        </p>
      </div>
    </div>

    <div className="flex">
      <Phone className="h-5 w-5 text-research-light-blue mr-3 mt-0.5" />
      <div>
        <h4 className="font-medium">Phone</h4>
        <p className="text-gray-600">+45 5520 9702</p>
      </div>
    </div>

    <div className="flex">
      <MapPin className="h-5 w-5 text-research-light-blue mr-3 mt-0.5" />
      <div>
        <h4 className="font-medium">Office</h4>
        <p className="text-gray-600">
          Rolf Krakes Alle 5<br />
          2860 Søborg, Denmark
        </p>
      </div>
    </div>

    <div>
      <h4 className="font-medium mb-2">Social & Academic Profiles</h4>
      <div className="flex space-x-3">
        <a
          href="https://www.linkedin.com/in/avishek-sarbajna"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/avisheksarbajna"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
          aria-label="GitHub Profile"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://scholar.google.com/citations?user=nnUM7sUAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
          aria-label="Google Scholar Profile"
        >
          <GoogleScholar className="h-5 w-5" />
        </a>
        <a
          href="https://orcid.org/0000-0003-2550-8997"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full"
          aria-label="ORCID Profile"
        >
          <ORCID className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</CardContent>

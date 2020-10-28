package squadron.manager.turbine.site;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import squadron.manager.turbine.NotFoundException;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SiteService {

    private final SiteRepository siteRepository;

    public Site getSite(Long id) {
        return siteRepository.getOne(id);
    }

    public List<Site> getSites() {
        return siteRepository.findAll();
    }

    public Site createSite(String name) throws javassist.NotFoundException {
        if (name != null) {
            return siteRepository.save(new Site(name));
        }
        throw new javassist.NotFoundException("No site to update!");
    }

    public Site updateSite(Long id, String name) throws javassist.NotFoundException {
        Optional<Site> optSite = siteRepository.findById(id);

        if (optSite.isPresent()) {
            Site site = optSite.get();
            if (name != null)
                site.setName(name);
            siteRepository.save(site);
            return site;
        }
        throw new javassist.NotFoundException("No site to update!");
    }

    public boolean deleteSite(Long id) {
        siteRepository.deleteById(id);
        return true;
    }
}

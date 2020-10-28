package squadron.manager.turbine.site;

import graphql.kickstart.tools.GraphQLMutationResolver;
import javassist.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class SiteMutationResolver implements GraphQLMutationResolver {

    private final SiteService siteService;

    public Site createSite(String name) throws NotFoundException {
       return siteService.createSite(name);
    }

    public Site updateSite(Long id, String name) throws NotFoundException {
           return siteService.updateSite(id, name);
    }

    public boolean deleteSite(Long id) {
       return siteService.deleteSite(id);
    }
}

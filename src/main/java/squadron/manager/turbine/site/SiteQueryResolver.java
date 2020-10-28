package squadron.manager.turbine.site;

import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class SiteQueryResolver implements GraphQLQueryResolver {

    private final SiteService siteService;

    public Site getSite(Long id) {
        return siteService.getSite(id);
    }

    public List<Site> sites() {
        return siteService.getSites();
    }

}

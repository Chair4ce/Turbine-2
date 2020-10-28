package squadron.manager.turbine.site;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Site {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    public Site(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Site(String name) {
        this.name = name;
    }

}
